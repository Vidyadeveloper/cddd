// Case Type: intake
module.exports = {
  "caseType": {
    "id": "intake",
    "label": "Intake Process"
  },
  "stages": [
    {
      "id": "registration",
      "label": "Registration",
      "steps": [
        {
          "id": "personal",
          "label": "Personal",
          "status": "in_progress",
          "view": "intake-registration-personal",
          "type": "manual"
        }
      ]
    },
    {
      "id": "review",
      "label": "Review",
      "steps": [
        {
          "id": "review_details",
          "label": "Review Details",
          "status": "under_review",
          "type": "manual"
        }
      ]
    },
    {
      "id": "completion",
      "label": "Completion",
      "steps": [
        {
          "id": "close_case",
          "label": "Close Case",
          "status": "completed",
          "type": "manual"
        }
      ]
    }
  ]
};