# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:7.0 as build-env
WORKDIR /src
COPY ./*.csproj .
RUN dotnet restore
RUN set ASPNETCORE_ENVIRONMENT Development /M
COPY . .
RUN dotnet publish -c Debug -o /publish

FROM mcr.microsoft.com/dotnet/aspnet:7.0 as runtime
WORKDIR /publish
COPY --from=build-env /publish .
EXPOSE 5001
ENTRYPOINT [ "dotnet","pizza_party_api.dll"]


