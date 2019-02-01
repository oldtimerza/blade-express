kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" delete deployment blade-express && \
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" delete services blade-express && \
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" create -f ./.circleci/deployment.yaml
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" create -f ./.circleci/load-balancer.yaml
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get services