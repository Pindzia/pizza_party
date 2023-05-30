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
# Install curl
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y openssl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /publish
# Add these lines to install OpenSSL and generate a self-signed certificate and check if the certificate exists
RUN mkdir -p /publish/https && \
    if [ ! -f /publish/https/pizzapartyapi.crt ]; then \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /publish/https/pizzapartyapi.key -out /publish/https/pizzapartyapi.crt -subj "/CN=pizzapartyapi" && \
    openssl pkcs12 -export -out /publish/https/pizzapartyapi.pfx -inkey /publish/https/pizzapartyapi.key -in /publish/https/pizzapartyapi.crt -passout pass:testpwd!;\
    chmod 755 /publish/https/*;\
    fi
COPY --from=build-env /publish .
EXPOSE 5000
ENTRYPOINT [ "dotnet","pizza_party_api.dll"]


