kubectl --kubeconfig="blade-express-cluster-kubeconfig.yaml" get nodes && \
kubectl run blade-express --image=oldtimerza/blade-express:latest --port=8080 && \
kubectl expose deployment/blade-express --type="NodePort" --port=8080