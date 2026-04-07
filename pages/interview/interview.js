Page({
  data: {
    question: "请介绍一下你自己",
    userAnswer: ""
  },
  onAnswerInput(e) {
    this.setData({ userAnswer: e.detail.value });
  },
  onLoad() {}
});
