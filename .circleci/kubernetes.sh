kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get nodes && \
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" create -f ./.circleci/my-manifest.yaml