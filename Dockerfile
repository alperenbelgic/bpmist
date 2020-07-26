FROM mcr.microsoft.com/dotnet/core/sdk:3.1-alpine AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ["API/bpmist.webapi/bpmist.webapi.csproj", "bpmist.webapi/"]
COPY ["API/bpmist.common/bpmist.common.csproj", "bpmist.common/"]
COPY ["API/bpmist.core/bpmist.core.csproj", "bpmist.core/"]
COPY ["API/bpmist.business/bpmist.business.csproj", "bpmist.business/"]
COPY ["API/bpmist.data/bpmist.data.csproj", "bpmist.data/"]
COPY ["API/bpmist.firestore/bpmist.firestore.csproj", "bpmist.firestore/"]

RUN dotnet restore "bpmist.webapi/bpmist.webapi.csproj"

# Copy everything else and build
COPY API ./

WORKDIR /src/bpmist.webapi
RUN dotnet build "bpmist.webapi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "bpmist.webapi.csproj" -c Release -o /app/publish


# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine as final
WORKDIR /app
COPY --from=publish /app/publish ./
ENTRYPOINT ["dotnet", "bpmist.webapi.dll"]