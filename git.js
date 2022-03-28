/**
 * git 笔记
 */

//初始化 空的git 仓库 新建.git 文件
git init 

// linux命令  cmd 是dos命令 不一样
rm -rf 文件夹名字 删除文件
rm 删除文件名 删除文件
mkdir 创建目录 创建文件夹
cd 目录名字 change direction 改变目录
cd d:
cd 目录 回退 或者拖进来也能拿到目录
clear
ls  list show  展示列表
ls -al 显示所有文件 包括隐藏文件

工作区 暂存区、过渡区  历史版本库

touch  1.txt  创建文件
ls 
cat 1.txt 文件名 查看文件
vi 1.txt 编辑文件 默认命令模式 不能编辑 按 insert 【i】 按钮 可以编辑 退出编辑模式保存 esc按钮 :q！强制放弃退出 :wq保存退出
echo  hello >> 1.txt

// 工作区  - 暂缓区
git add .   git add -A   git add 文件夹名称
git status 查看状态 工作区红色
git rm --cached 文件名 -f 删除暂缓区文件

// 提交 暂存区 - 历史区/版本库
git commit -m "xxx"   // 可以用:q!退出编辑  未push的操作通过 git commit --amend --only -m 'xxx' 修改commit 信息
git commit -am "xx" // add commit 前提是文件之前提交过 才能 -a -m 提交
git log 看日志

// 文件比较 diff  
// 工作区 暂存区 版本库 三个区域比较

// 工作区 暂存区比较
git diff
// 工作区 版本库 
git diff master《分支名》
// 暂存区 版本库
git diff --cached

    
/**
 * / 撤销 回滚操作
 */

git checkout . / 文件名 // 从 暂存区 中将 工作区 内容覆盖掉 不可恢复

git reset HEAD . / 文件名 // 缓存区 内容重置到 工作区       

//版本区（历史区） 回滚到之前的版本区版本 依靠SHA id， git log 看版本号
git reset --hard 版本号 // 同时同步缓存区 工作区
// 看不到中间回滚前的版本号 git reflog 看所有的log
git reset --hard HEAD^ // 回滚上一个版本 简单方法

/**
 * 新建分支
 */
git branch
// 创建分支
git branch dev
git checkout dev // 切分支 并担忧当前分支的所有的提交版本号
git checkout  版本号 文件名 
git branch -D 分支名 // 删除分支名字  删除分支时候 当前用户不能再当前分支上

// 简写 创建分支 并切换分支
git checkout -b dev 

当文件有修改的时候 切换分支
git stash 暂存文件 // 分支有修改的时候 不能切换分支 可以暂存修改  stash 切换分支
// 暂存区 覆盖 工作区
git stash pop // 还原暂存的内容

 /**

合并分支
*/
git merge dev // 将dev合并到master

//  出现冲突 自己打开编辑器解决

// 图形化展示分支合并情况
git log --graph // --oneline 显示一行

/** 远程提交 */
// 只能显示 历史区 / 版本区内容 -现有github账号
touch ReadableStream.md 
.gitignore 
 -- .idea
 -- gitignore
 -- git不会上传空文件夹 -- 文件夹下添加 .gitkeep 文件 -- 可以上传文件夹 但是不识别.gitkeep文件

 git remote add origin htts://xxx.git // 添加远程仓库 origin 是名字
 git push -u origin master // -u 写了以后 以后都不用写 origin master ,默认记住了
 git remote -v // 测试远程绑定与否
 git remote rm 名字 // origin
 ‘

 /**
  * 通过 gh-pages 分支来发布我们的静态页面
  */
- 在项目中创建一个这样的分支 
- 将分支提交到线上仓库
- 找到提供你的网址

-- github上切换分支 setting github pages 生成地址

git  clone https://xx.git myname

只有fork 关系才能发 pull request 合并请求

添加 collaborators 贡献者

GUI 
vsc  邮件