kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" set image deployment.apps/blade-express blade-express=oldtimerza/blade-express:latest
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" expose deployment.apps/blade-express --type="LoadBalancer" --port 8080
kubectl --kubeconfig="./.circleci/blade-express-cluster-kubeconfig.yaml" get services