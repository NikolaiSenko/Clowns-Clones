import { createElement } from "./templates";

function createReportWindow() {
  const overlay = createElement("div", "background-window");
  overlay.id = "background-window";
  const modalReport = createElement("div", "report-window");
  modalReport.id = "report-window";
  const title = createElement("div", "modal__report--title", "Жалоба на пин");
  const container = createElement("div", "reports-container");
  const spamReport = createReportOption(
    "spam",
    "Спам",
    "Вводящие в заблуждение или повторяющиеся публикации"
  );
  const nudityReport = createReportOption(
    "nudity",
    "Изображения обнаженного тела или порнография",
    "Содержимое сексуального характера"
  );
  const selfHarmReport = createReportOption(
    "self-harm",
    "Членовредительство",
    " Расстройства пищевого поведения, нанесение травм себе, суицид"
  );
  const hateSpeachReport = createReportOption(
    "hate-speech",
    "Агрессивные действия",
    " Предрассудки, стереотипы, идея превосходства белой расы, оскорбления"
  );
  const dangerousGoodsReport = createReportOption(
    "dangerous-goods",
    "Опасные товары",
    " Наркотики, оружие, регулируемые товары"
  );
  const stalkerReport = createReportOption(
    "stalker",
    "Преследование или нарушение конфиденциальности",
    "Оскорбления, угрозы, публикация персональных данных"
  );
  const violenceReport = createReportOption(
    "graphic-violence",
    "Сцены насилия",
    "Графическое изображение или пропаганда насилия"
  );
  const intellectualPropertyReport = createReportOption(
    "intellectual-property",
    "Это моя интеллектуальная собственность",
    "Нарушение авторских прав или прав на товарный знак"
  );
  const reportFooter = createElement("div", "report-footer");
  const submitBtn = createElement("button", "submit-btn", "Submit");
  submitBtn.id = "btn-submit";
  const cancelBtn = createElement("button", "btn-cancel", "Cancel");
  cancelBtn.id = "btn-cancel";
  overlay.append(modalReport);
  reportFooter.append(submitBtn, cancelBtn);
  modalReport.append(title, container, reportFooter);
  container.append(
    spamReport,
    nudityReport,
    selfHarmReport,
    hateSpeachReport,
    dangerousGoodsReport,
    stalkerReport,
    violenceReport,
    intellectualPropertyReport
  );
  return overlay;
}
function createReportOption(id, labelValue, text) {
  const reportOption = createElement("div", "report-option");
  const input = createElement("input", "report");
  input.type = "radio";
  input.id = id;
  input.name = "reportPinOptions";
  input.value = id;
  const label = createElement("label", "report-title", labelValue);
  label.for = id;
  const reportDescription = createElement("div", "report-description", text);
  reportOption.append(input, label, reportDescription);
  return reportOption;
}
export { createReportWindow };
