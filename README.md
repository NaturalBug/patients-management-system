# patients-management-system

This project use GraphQL to interact with https://github.com/NaturalBug/patients-api

## Todo

- Use GraphQl to get all patients and show in list
- The infrormation in Dialog shown after click specific patient should related to the patient
  - For patient who does't has order, show `add` button
    - After click `add` button, the button will switch into `cancel` and show `save` button
  - For patient who has order, show message of order and `edit` button
    - After click `edit` button, the button will switch into `cancel` and show `save` button
  - Click `save`: the change will apply to DB through GraphQL
  - Click `cancel`: the change will `not` apply to DB through GraphQL and close dialog
