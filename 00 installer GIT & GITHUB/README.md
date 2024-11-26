# Installer GIT
https://git-scm.com/  
<img src="../z-img/git.png" width="500">  

```
git config --global user.name "Mona Lisa"
```

```
git config --global user.email "toto@toto.com"
```

## Connecter votre repertoire à votre repo
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://votre_repo.git
git push -u origin main
```