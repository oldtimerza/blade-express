kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get containers && \
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" create -f ./.circleci/manifest.yaml
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" set image deployment.apps/blade-express blade-express=oldtimerza/blade-express:latest
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" expose deployment.apps/blade-express --type="NodePort" --port 8080