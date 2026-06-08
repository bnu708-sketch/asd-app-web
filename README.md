# ASD体脑功能诊疗一体化系统网页说明

这是一个用于展示“基于计算视觉的孤独症儿童体脑功能诊疗一体化系统”的静态产品页。页面把项目材料中的系统逻辑、应用场景和架构图重新组织成一个偏产品化的展示网站，重点呈现系统已经具备的筛查、评估、干预、随访和机构部署能力。

公开访问地址：

https://bnu708-sketch.github.io/asd-app-web/

普通查看者和演示人员可先阅读：[使用说明.md](./使用说明.md)

## 页面定位

本页面面向合作机构、评审方、医疗康复机构和产品展示场景，语气上尽量避免“方案还在构想中”的感觉，改为“产品已经上线、可演示、可部署”的表达方式。

主要内容包括：

- 首屏产品介绍和运行状态
- 已上线运行概况
- 诊疗痛点与系统回应
- 平台能力切换
- 家庭、学校、机构、医生多角色工作台
- 风险分级路径
- 数据采集、评估、干预、迭代闭环
- 项目图谱与系统架构
- 产品交付与部署状态

## 文件结构

```text
app-web/
  index.html              页面结构和主要内容
  styles.css              视觉样式、响应式布局和动效
  script.js               平台能力、角色、风险路径切换交互
  assets/
    collaboration-map.png 政产学研用协同路径图
    system-diagram.png    体脑功能诊疗系统开发图
    scenario-flow.png     多场景筛查与风险分级图
```

## 本地预览

这个项目是纯静态页面，直接打开 `index.html` 即可预览。

如果需要用本地服务器预览，可在 `app-web` 目录运行：

```bash
python3 -m http.server 8765
```

然后访问：

```text
http://127.0.0.1:8765/
```

## 更新和部署

本目录本身是一个独立 Git 仓库，远程仓库为：

```text
git@github.com:bnu708-sketch/asd-app-web.git
```

GitHub Pages 从 `main` 分支根目录发布。更新页面后，提交并推送即可触发公开页面刷新：

```bash
git add index.html styles.css script.js assets
git commit -m "Update product page"
git push
```

如果更新了 CSS 或 JS，建议同步修改 `index.html` 里的资源版本参数，例如：

```html
<link rel="stylesheet" href="./styles.css?v=your-version" />
<script src="./script.js?v=your-version"></script>
```

这样可以避免浏览器或 GitHub Pages 缓存旧资源。

## 维护建议

- 文案保持“已上线、可部署、可演示”的产品语气。
- 不再恢复底部表单或“生成演示需求”入口。
- 新增指标时避免过度精确，除非有真实数据来源。
- 医疗康复相关表达尽量稳健，避免夸大诊断或治疗效果。
- 新增图片时放入 `assets/`，并在 `index.html` 使用相对路径引用。
