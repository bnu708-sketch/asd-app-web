const modules = {
  screen: {
    index: "01 / 04",
    title: "家庭与基层的一键早筛",
    copy:
      "通过短视频动作捕捉、眼动追踪与基础问卷，在家庭、幼儿园和基层机构完成初筛；系统自动生成低、中、高风险分级，并给出转诊与随访建议。",
    items: ["高清视频与深度摄像头采集", "异常动作、眼神回避与面部表情识别", "与专科医院诊疗通道联动"],
  },
  fusion: {
    index: "02 / 04",
    title: "动作、脑功能和行为表现同屏解释",
    copy:
      "系统把VMC、EEG、fNIRS、眼动和行为量表结果融合为体脑能力画像，帮助康复师识别真正制约儿童参与和学习的底层功能。",
    items: ["同步误差目标≤10ms", "多模态融合一致性≥0.85", "体脑发育增龄图谱持续迭代"],
  },
  course: {
    index: "03 / 04",
    title: "评估结果直达康教课程处方",
    copy:
      "在ABA干预基础上嵌入FMAPC精细运动课程和PMCPC体能里程碑课程，形成可执行、可追踪、可量效评估的训练方案。",
    items: ["课程标准与教师用书", "训练任务推送和实时反馈", "剂量-效应分析报告"],
  },
  trace: {
    index: "04 / 04",
    title: "把每一次训练转化为长期证据",
    copy:
      "平台记录筛查、诊断辅助、干预执行和随访变化，为机构运营、产品迭代和政策建议沉淀可复用的数据资产。",
    items: ["标准化评估报告", "家校医协同随访", "数据安全合规与接口预留"],
  },
};

const roles = {
  parent: {
    label: "家庭端",
    title: "把“看不懂的异常”变成清晰行动建议",
    copy:
      "家长可在家完成短视频采集和训练任务打卡，查看风险等级、能力变化曲线和下一步就医建议，降低试错成本。",
  },
  school: {
    label: "学校/幼儿园",
    title: "在日常活动中完成温和、连续的筛查",
    copy:
      "教师可按班级管理儿童筛查任务，观察动作、步态、精细操作和社交注视变化，及时与家长和基层机构协同。",
  },
  clinic: {
    label: "基层与康复机构",
    title: "让康复训练有统一评估入口和量效反馈",
    copy:
      "机构可用诊断仪完成标准化评估，生成课程处方，持续追踪FMAPC和PMCPC训练效果，提升服务质量和付费转化。",
  },
  doctor: {
    label: "专科医生端",
    title: "把多场景数据接入专科判断与转诊闭环",
    copy:
      "医生端聚合家庭、学校和基层采集数据，辅助判断风险等级、伴随问题和随访优先级，提升早筛与精准诊断效率。",
  },
};

const risks = {
  low: "随访观察，推送体质发育促进训练，记录月度能力变化。",
  mid: "进入复筛与基层评估流程，结合家族史、眼动、EEG/fNIRS和动作数据生成干预建议。",
  high: "直接对接专科医院诊疗，提供多模态报告和前期训练记录，缩短就医沟通链路。",
};

const moduleIndex = document.querySelector("#moduleIndex");
const moduleTitle = document.querySelector("#moduleTitle");
const moduleCopy = document.querySelector("#moduleCopy");
const moduleList = document.querySelector("#moduleList");

document.querySelectorAll(".module-tab").forEach((button) => {
  button.addEventListener("click", () => {
    const module = modules[button.dataset.module];
    document.querySelectorAll(".module-tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab === button);
      tab.setAttribute("aria-selected", tab === button ? "true" : "false");
    });
    moduleIndex.textContent = module.index;
    moduleTitle.textContent = module.title;
    moduleCopy.textContent = module.copy;
    moduleList.innerHTML = module.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const roleLabel = document.querySelector("#roleLabel");
const roleTitle = document.querySelector("#roleTitle");
const roleCopy = document.querySelector("#roleCopy");

document.querySelectorAll(".role-button").forEach((button) => {
  button.addEventListener("click", () => {
    const role = roles[button.dataset.role];
    document.querySelectorAll(".role-button").forEach((roleButton) => {
      roleButton.classList.toggle("is-active", roleButton === button);
    });
    roleLabel.textContent = role.label;
    roleTitle.textContent = role.title;
    roleCopy.textContent = role.copy;
  });
});

const riskText = document.querySelector("#riskText");

document.querySelectorAll(".risk-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".risk-button").forEach((riskButton) => {
      riskButton.classList.toggle("is-active", riskButton === button);
    });
    riskText.textContent = risks[button.dataset.risk];
  });
});

const toast = document.querySelector("#toast");
let toastTimer;

document.querySelector("#toastButton").addEventListener("click", () => {
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
});
