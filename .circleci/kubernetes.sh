kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get nodes && \
kubectl create -f ./.circleci/my-manifest.yaml