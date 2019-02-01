kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get nodes && \
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" create -f ./.circleci/manifest.yaml
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" expose deployment.apps/blade-express --type="NodePort" --port 8080