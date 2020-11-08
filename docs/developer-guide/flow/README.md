---
order: 1
---

# Flow
> Flow is the base of your workload, it defined all the tasks you want to do and theirs orders.

## Flow sample

The flow model is a yaml document describing how Kestra will schedule and compute your workload.

Here is a full sample flow demonstrating the flow definition. 
The following code is a sample existing task in Kestra for testing purposes.

## Flow Properties

```yaml
id: samples 
namespace: org.kestra.tests 
revision: 8

description: "Some flow **documentation** in *Markdown*"

inputs:
  - name: my-value
    type: STRING
    required: false

variables:
  first: "1"
  second: "{{vars.first}} > 2"
  third: "{{vars.second}} > 3"

tasks: 
  - id: date 
    type: org.kestra.core.tasks.debugs.Return
    description: "Some tasks **documentation** in *Markdown*"
    format: "A log line content with a contextual date variable {{taskrun.startDate}}" 

errors: 
  - id: failed-echo 
    type: org.kestra.core.tasks.debugs.Echo  
    format: I'm failing {{task.id}}

listeners:
  - description: "some listener **documentation** in *Markdown*"
    conditions:
      - type: org.kestra.core.models.conditions.types.ExecutionStatusCondition
        in:
          - SUCCESS
    tasks:
      - id: execution-failed-listener
        type: org.kestra.core.tasks.scripts.Bash
        commands:
          - echo "I'm a listeners"

triggers:
  - id: monthly
    type: org.kestra.core.models.triggers.types.Schedule
    description: "some trigger **documentation** in *Markdown*"
    cron: 0 0 1 * *
    backfill:
      start: 2020-01-01T00:00:00+02:00
```


| Field | Description |
| ---------- | ----------- |
|`id`|Flow identifier, must be unique across namespaces.|
|`namespace`|Each task live in one arbitrary namespace, this is useful for task organisation. Namespace is required.|
|`revision`|Flow version, handle internally by kestra, and will be incremented for each modifications save, not required since autogenerated.|
|`description`|Description for documentation, more details [here](../documentation/) |
|`inputs`|List of inputs for current flow, more details [here](../inputs/) |
|`inputs.[].name`|The name for this inputs, allowing to use it as vars on the current flow|
|`inputs.[].type`|The type for this inputs, for example (STRING, FILE, ...)|
|`inputs.[].required`|If the input is required (and prevent flow to be executed without this input|
|`variables`|A list of variables (as key, value) for the current flow that can be reach with <code v-pre>{{ vars.name }}</code>|
|`tasks`|A list of related tasks the current flow, all tasks will be run sequentially.|
|`tasks.[].id`|The task id that must be **unique** for current flow.|
|`tasks.[].type`|The task type that is a full java class name.|
|`tasks.[].description`|Description for documentation, more details [here](../documentation/) |
|`tasks.[].xxx`|Each task type come with specific specific field that is documented on [plugins page](../../../plugins/)|
|`errors`|A list of errors tasks the current flow, all tasks will be run sequentially and will be run only if there is any error on the current execution.|
|`errors.[].xxx`|The same property as `tasks`, error can be any normal tasks, more details [here](../errors-handling/)  |
|`listeners`|List of listeners for current flow, more details [here](../listeners/)|
|`listeners.[].description`|Description for documentation, more details [here](../documentation/) |
|`listeners.[].condition`|The condition that will be valided in order to launch or skip this listeners|
|`listeners.[].tasks.[].xxx`|The same property as `tasks`, the task to run for this listeners|
|`triggers`|Triggers are external events (like date for example) to launch this jobs,more details [here](../triggers/) |
|`triggers.[].id`|The trigger id that must be unique and can't be updated.|
|`triggers.[].type`|The trigger type that is a full java class name.|
|`triggers.[].description`|Description for documentation, more details [here](../documentation/) |
|`triggers.[].xxx`|Like task, each trigger have theirs properties|