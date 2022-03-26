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

// 工作区  - 暂缓区
git add . git add -A 
git status 查看状态 工作区红色
git rm --cached 文件名 -f 删除暂缓区文件

// 提交 暂存区 - 历史区 版本库
git commit -m"xxx"
