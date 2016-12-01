node {
    checkout scm
    sh 'npm install'
    sh 'npm test'
    sh 'npm run lint'
    sh 'npm run build-linux'
    dir('dist') {
      archiveArtifacts artifacts: '*.AppImage', fingerprint: true;
    }
}
