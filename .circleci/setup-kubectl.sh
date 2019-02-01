sudo apt-get update && \
sudo apt-get install -y apt-transport-https && \
sudo curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - && \
sudo touch /etc/apt/sources.list.d/kubernetes.list && \
sudo sh -c 'echo deb http://apt.kubernetes.io/ kubernetes-xenial main > /etc/apt/sources.list.d/kubernetes.list' && \
sudo apt-get update && \
sudo apt-get install -y kubelet kubeadm kubectl