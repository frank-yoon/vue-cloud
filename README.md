# hello-world with defaults

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

### Containerization
See [Docker (Nginx)](https://cli.vuejs.org/guide/deployment.html#docker-nginx).

#### Build your image
See [Deployment](https://docs.docker.com/get-started/part2/)
```
docker build -t hello-world:1.0 .
```

#### Start a container based on your new image
```
docker run -p 8000:80 -d --name hw hello-world:1.0
```
Visit your application in a browser at `localhost:8000`

#### Remove your container
```
docker container rm --force hw
```

---

### Deploying to Kubernetes
See [Deploying and Checking Your Application](https://docs.docker.com/get-started/part3/).
```
kubectl apply -f hw.yaml
```
Visit your application in a browser at `localhost:30001`
