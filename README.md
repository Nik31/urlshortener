To install dependencies
```
    npm install
```

Build the docker image from dockerfile and run it
```
    docker build -t infra-cloud-urlshortener .
    docker run -p 8080:6060 infra-cloud-urlshortener
```

Pull the docker from docker hub
```
docker image pull nikpras31/infra-cloud-urlshortener
docker run -p 8080:6060 nikpras31/infra-cloud-urlshortener

``` 
