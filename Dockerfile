## build client
# build client canceled, because too slow, 
# angular prod build is built in prodBuild folder in local and copied. below lines down to npm run commented out.
#FROM node:14.5-alpine AS client
#WORKDIR /usr/src/app
#COPY WebUI/package.json ./
#RUN npm install
#COPY WebUI ./
#RUN npm run build -- --prod

# Build backend
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ["API/bpmist.webapi/bpmist.webapi.csproj", "bpmist.webapi/"]
COPY ["API/bpmist.common/bpmist.common.csproj", "bpmist.common/"]
COPY ["API/bpmist.core/bpmist.core.csproj", "bpmist.core/"]
COPY ["API/bpmist.business/bpmist.business.csproj", "bpmist.business/"]
COPY ["API/bpmist.data/bpmist.data.csproj", "bpmist.data/"]
COPY ["API/bpmist.firestore/bpmist.firestore.csproj", "bpmist.firestore/"]
COPY ["API/bpmist.javascript/bpmist.javascript.csproj", "bpmist.javascript/"]

RUN dotnet restore "bpmist.webapi/bpmist.webapi.csproj"

# Copy everything else and build
COPY API ./

WORKDIR /src/bpmist.webapi
RUN dotnet build "bpmist.webapi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "bpmist.webapi.csproj" -c Release -o /app/publish


# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0 as final
WORKDIR /app
COPY --from=publish /app/publish .

# below line commented out (two below is included instead)
#COPY --from=client /usr/src/app/dist/bpmist ./wwwroot
COPY WebUI/prodBuild ./wwwroot

ENTRYPOINT ["dotnet", "bpmist.webapi.dll"]