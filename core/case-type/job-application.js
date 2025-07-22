const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class JobApplicationCase extends BlazeCase {
  constructor() {
    super(
      "job-application",
      "Job Application",
      [
  {
    "id": "stage1",
    "label": "Stage 1",
    "steps": [
      {
        "id": "step1",
        "label": "Step 1",
        "status": "pending",
        "view": "summary",
        "type": "manual"
      }
    ]
  },
  {
    "id": "perocess",
    "label": "Perocess",
    "steps": []
  }
]
    );
  }
}

module.exports = new JobApplicationCase();