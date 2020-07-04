using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;

namespace bpmist.comGen
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");


            var files = Directory.GetFiles("Config\\commands");

            var controllerContent = new StringBuilder();

            foreach (var commandConfigurationFilePath in files)
            {
                string commandConfigurationFileContent = File.ReadAllText(commandConfigurationFilePath);

                var commandModel = JsonSerializer.Deserialize<CommandModel>(commandConfigurationFileContent);

                string interfaceContent = CreateInterfaceContent(commandModel);
                commandModel.GetInterfaceFilePath(out string interfaceFilePath, out string interfaceFileName);
                Directory.CreateDirectory("..\\" + interfaceFilePath);
                File.WriteAllText("..\\" + interfaceFilePath + interfaceFileName, interfaceContent);


                string generatedCommandContent = CreateGeneratedCommandContent(commandModel);
                commandModel.GetGeneratedCommandFilePath(out string generatedCommandFilePath, out string generatedCommandFileName);
                Directory.CreateDirectory("..\\" + generatedCommandFilePath);
                File.WriteAllText("..\\" + generatedCommandFilePath + generatedCommandFileName, generatedCommandContent);


                string implementationCommandContent = CreateImplementationCommandContent(commandModel);
                commandModel.GetImplementationCommandFilePath(out string implementationCommandFilePath, out string implementationCommandFileName);
                Directory.CreateDirectory(implementationCommandFilePath);
                string implementationCommandFullFilePath = "..\\" + implementationCommandFilePath + implementationCommandFileName;
                if (!File.Exists(implementationCommandFullFilePath))
                {
                    File.WriteAllText(implementationCommandFullFilePath, implementationCommandContent);
                }

                if (commandModel.usedInApi)
                {
                    string commandControllerContent = commandModel.isQuery ? CreateGetController(commandModel) : "";

                    controllerContent.AppendLine(commandControllerContent);

                    File.WriteAllText(implementationCommandFullFilePath, implementationCommandContent);
                }
            }

            if (controllerContent.Length > 0)
            {
                string controllerFileContent = File.ReadAllText("Config/global/ControllerFile.template");

                controllerFileContent = controllerFileContent.Replace("[ControllersContent]", controllerContent.ToString());

                File.WriteAllText("..\\bpmist.webapi\\Controllers\\GeneratedControllers.cs", controllerFileContent);
            }

        }

        static string CreateGetController(CommandModel commandModel)
        {
            string fileContent = File.ReadAllText("Config/global/GetController.template");

            string commandName = commandModel.name;
            fileContent = fileContent.Replace("[CommandName]", commandName);

            string command_query = commandModel.isQuery ? "Query" : "Command";
            fileContent = fileContent.Replace("[Command_Query]", commandModel);            

            string parameterConstructorParameters = string.Join(", ",
                              commandModel.parameters.Select(p =>
                              {
                                  string name = p.Key.Split('_')[0];
                                  string type = p.Key.Split('_')[1];
                                  if (UseNullableParameter(type, commandModel.usedInApi))
                                  {
                                      return type + "?" + " " + name;
                                  }
                                  return type + " " + name;
                              }
                              ));

            fileContent = fileContent.Replace("[InputParameters]", parameterConstructorParameters);

            string passingParameters = string.Join(", ", commandModel.parameters.Select(p => p.Key.Split('_')[0]));

            fileContent = fileContent.Replace("[PassingParameters]", passingParameters);

            fileContent = fileContent.Replace("[ReturnType]", passingParameters);

            return fileContent;
        }

        static string CreateImplementationCommandContent(CommandModel commandModel)
        {
            string fileContent = System.IO.File.ReadAllText("Config/global/Command.template");

            string interfaceNamespace = commandModel.interfaceProject + ".ICommands";

            fileContent = fileContent.Replace("[InterfaceNamespace]", interfaceNamespace);

            string commandNamespace = commandModel.implementationProject + ".Commands";

            fileContent = fileContent.Replace("[CommandNamespace]", commandNamespace);

            string commandName = commandModel.name;
            fileContent = fileContent.Replace("[CommandName]", commandName);

            string command_query = commandModel.isQuery ? "Query" : "Command";
            fileContent = fileContent.Replace("[Command_Query]", commandModel);

            return fileContent;

        }

        static string CreateGeneratedCommandContent(CommandModel commandModel)
        {
            string fileContent = System.IO.File.ReadAllText("Config/global/Command.gen.template");

            string interfaceNamespace = commandModel.interfaceProject + ".ICommands";

            fileContent = fileContent.Replace("[InterfaceNamespace]", interfaceNamespace);

            string commandNamespace = commandModel.implementationProject + ".Commands";

            fileContent = fileContent.Replace("[CommandNamespace]", commandNamespace);

            string commandName = commandModel.name;
            fileContent = fileContent.Replace("[CommandName]", commandName);

            string command_query = commandModel.isQuery ? "Query" : "Command";
            fileContent = fileContent.Replace("[Command_Query]", commandModel);            

            string[] injects = commandModel.injects;
            fileContent = fileContent.Replace("[InjectingCommandParameteres]",
                string.Join(", ",
                    injects.Select(i => i.Split('_')[1] + " " + "_" + i.Split('_')[0])
                    ));

            fileContent = fileContent.Replace("[InjectingCommandPropertyAssignment]",
                string.Join(Environment.NewLine,
                    injects.Select(i => "            " + "this." + i.Split('_')[0] + " = " + "_" + i.Split('_')[0] + ";")
                    ));

            fileContent = fileContent.Replace("[InjectingCommandProperties]",
                 string.Join(Environment.NewLine,
                     injects.Select(i => "        " + "private " + i.Split('_')[1] + " " + i.Split('_')[0] + " { get; }")
                     ));

            return fileContent;

        }

        static string CreateInterfaceContent(CommandModel commandModel)
        {
            string fileContent = System.IO.File.ReadAllText("Config/global/ICommand.template");

            string interfaceNamespace = commandModel.interfaceProject + ".ICommands";
            fileContent = fileContent.Replace("[InterfaceNameSpace]", interfaceNamespace);

            string commandName = commandModel.name;
            fileContent = fileContent.Replace("[CommandName]", commandName);

            string command_query = commandModel.isQuery ? "Query" : "Command";
            fileContent = fileContent.Replace("[Command_Query]", commandModel);            

            string parameterConstructorParameters = string.Join(", ",
                              commandModel.parameters.Select(p =>
                              {
                                  string name = p.Key.Split('_')[0];
                                  string type = p.Key.Split('_')[1];
                                  if (UseNullableParameter(type, commandModel.usedInApi))
                                  {
                                      return type + "?" + " " + name;
                                  }
                                  return type + " " + name;
                              }

                              ));

            fileContent = fileContent.Replace("[ParameterConstructorParameters]", parameterConstructorParameters);

            string parameterPropertyAssignments = string.Join(Environment.NewLine,
            commandModel.parameters.Select(p =>
            {
                string name = p.Key.Split('_')[0];
                string type = p.Key.Split('_')[1];
                if (UseNullableParameter(type, commandModel.usedInApi))
                {
                    return "            " + "this._Nullable" + p.Key.Split('_')[0] + " = " + p.Key.Split('_')[0] + ";";
                }
                return "            " + "this." + name + " = " + name + ";";
            })
            );

            fileContent = fileContent.Replace("[ParameterPropertyAssignments]", parameterPropertyAssignments);

            string parameterProperties = string.Join(Environment.NewLine,
            commandModel.parameters.Select(p =>
            {
                string name = p.Key.Split('_')[0];
                string type = p.Key.Split('_')[1];
                if (UseNullableParameter(type, commandModel.usedInApi))
                {
                    return
                    "        " + $"public {type}? _Nullable{name} {{ get; }} " +
                    Environment.NewLine +
                    "        " + $"public {type} {name} {{ get {{ return this._Nullable{name}.Value; }} }} ";
                }
                return "        " + $"public {p.Key.Split('_')[1]} {p.Key.Split('_')[0]} {{ get; }} ";
            })
            );

            fileContent = fileContent.Replace("[ParameterProperties]", parameterProperties);



            string resultConstructorParameters = string.Join(", ",
                              commandModel.returnType.Select(p => p.Key.Split('_')[1] + " " + p.Key.Split('_')[0]));

            fileContent = fileContent.Replace("[ResultConstructorParameters]", resultConstructorParameters);

            string resultPropertyAssignments = string.Join(Environment.NewLine,
            commandModel.returnType.Select(p => "            " + "this." + p.Key.Split('_')[0] + " = " + p.Key.Split('_')[0] + ";")
            );

            fileContent = fileContent.Replace("[ResultPropertyAssignments]", resultPropertyAssignments);

            string resultProperties = string.Join(Environment.NewLine,
            commandModel.returnType.Select(p => "        " + $"public {p.Key.Split('_')[1]} {p.Key.Split('_')[0]} {{ get; }} ")
            );

            fileContent = fileContent.Replace("[ResultProperties]", resultProperties);

            return fileContent;
        }

        static bool UseNullableParameter(string typeName, bool usedInApi)
        {
            string[] nonNullableStructTypes = new string[] {
                "int", "double", "DateTime", "bool"
            };

            if (usedInApi && nonNullableStructTypes.Contains(typeName))
            {
                return true;
            }

            return false;
        }
    }
}


public class CommandModel
{
    public string guid { get; set; }

    public string name { get; set; }
    public string interfaceProject { get; set; }

    public string implementationProject { get; set; }

    public bool isQuery { get; set; }

    public string[] injects { get; set; }

    public ParameterCollection parameters { get; set; }

    public ParameterCollection returnType { get; set; }

    public bool usedInApi { get; set; } = false;

    public void GetInterfaceFilePath(out string filePath, out string fileName)
    {
        filePath = this.interfaceProject + "\\" + "CommandInterfaces";
        fileName = "\\" + "I" + this.name + (this.isQuery ? "Query" : "Command") + ".cs";
    }

    public void GetGeneratedCommandFilePath(out string filePath, out string fileName)
    {
        filePath = this.implementationProject + "\\" + "Commands\\Generated";
        fileName = "\\" + this.name + (this.isQuery ? "Query" : "Command") + ".cs";
    }

    public void GetImplementationCommandFilePath(out string filePath, out string fileName)
    {
        filePath = this.implementationProject + "\\" + "Commands";
        fileName = "\\" + this.name + (this.isQuery ? "Query" : "Command") + ".cs";
    }


}

public class ParameterCollection : Dictionary<string, ParameterCollection>
{

}