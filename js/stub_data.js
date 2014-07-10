var data = {
    "_id" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "changelog" : {
        "$count" : 100,
        "$prob" : 1
    },
    "changelog.total" : {
        "$data" : {
            "min" : 0,
            "max" : 24
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "changelog.startAt" : {
        "$data" : {
            "min" : 0,
            "max" : 0
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "changelog.histories" : {
        "$array" : true,
        "$count" : 670,
        "$prob" : 6.7
    },
    "changelog.histories.items" : {
        "$count" : 985,
        "$array" : true,
        "$prob" : 1.4701492537313432
    },
    "changelog.histories.items.from" : {
        "$count" : 985,
        "$type" : {
            "string" : 659,
            "null" : 326
        },
        "$prob" : 1
    },
    "changelog.histories.items.field" : {
        "$data" : {
            "status" : 205,
            "resolution" : 117,
            "Workflow" : 196,
            "Component" : 28,
            "Fix Version" : 263,
            "summary" : 8,
            "issuetype" : 9,
            "assignee" : 66,
            "priority" : 8,
            "Version" : 54,
            "Link" : 14,
            "Parent" : 5,
            "Rank" : 3,
            "description" : 5,
            "Attachment" : 1,
            "reporter" : 1,
            "Driver changes needed?" : 1,
            "Roadmap" : 1
        },
        "$count" : 985,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.items.fromString" : {
        "$count" : 985,
        "$type" : {
            "string" : 671,
            "null" : 314
        },
        "$prob" : 1
    },
    "changelog.histories.items.to" : {
        "$count" : 985,
        "$type" : {
            "string" : 796,
            "null" : 189
        },
        "$prob" : 1
    },
    "changelog.histories.items.fieldtype" : {
        "$data" : {
            "jira" : 980,
            "custom" : 5
        },
        "$count" : 985,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author" : {
        "$count" : 670,
        "$prob" : 1
    },
    "changelog.histories.author.displayName" : {
        "$data" : {
            "Eliot Horowitz" : 377,
            "Alvin Richards" : 99,
            "Ian Whalen" : 103,
            "Aaron Staple" : 63,
            "Dwight Merriman" : 9,
            "Michael Dirolf" : 5,
            "Brandon Black" : 2,
            "Kristina Chodorow" : 2,
            "Yun Huang Yong" : 1,
            "Thomas Rueckstiess" : 1,
            "David Hows" : 1,
            "Scott Hernandez" : 4,
            "Jeff Yemin" : 1,
            "Eric Milkie" : 1,
            "Mathias Stearn" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.name" : {
        "$data" : {
            "eliot" : 377,
            "alvin" : 99,
            "ian@10gen.com" : 103,
            "aaron" : 63,
            "dwight_10gen" : 9,
            "mike" : 5,
            "brandon.black@10gen.com" : 2,
            "kristina" : 2,
            "goosmurf" : 1,
            "thomasr" : 1,
            "david.hows" : 1,
            "scotthernandez" : 4,
            "jeff.yemin" : 1,
            "milkie" : 1,
            "redbeard0531" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/user?username=eliot" : 377,
            "https://jira.mongodb.org/rest/api/2/user?username=alvin" : 99,
            "https://jira.mongodb.org/rest/api/2/user?username=ian%4010gen.com" : 103,
            "https://jira.mongodb.org/rest/api/2/user?username=aaron" : 63,
            "https://jira.mongodb.org/rest/api/2/user?username=dwight_10gen" : 9,
            "https://jira.mongodb.org/rest/api/2/user?username=mike" : 5,
            "https://jira.mongodb.org/rest/api/2/user?username=brandon.black%4010gen.com" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=kristina" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=goosmurf" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=thomasr" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=david.hows" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=scotthernandez" : 4,
            "https://jira.mongodb.org/rest/api/2/user?username=jeff.yemin" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=milkie" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=redbeard0531" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.avatarUrls" : {
        "$count" : 670,
        "$prob" : 1
    },
    "changelog.histories.author.avatarUrls.24x24" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=small&avatarId=10122" : 449,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=alvin&avatarId=13010" : 99,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=ian%4010gen.com&avatarId=11023" : 103,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=dwight_10gen&avatarId=12244" : 9,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=brandon.black%4010gen.com&avatarId=11709" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=thomasr&avatarId=11906" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=scotthernandez&avatarId=13248" : 4,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=jeff.yemin&avatarId=12603" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=milkie&avatarId=13238" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=redbeard0531&avatarId=13244" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.avatarUrls.16x16" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&avatarId=10122" : 449,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=alvin&avatarId=13010" : 99,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=ian%4010gen.com&avatarId=11023" : 103,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=dwight_10gen&avatarId=12244" : 9,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=brandon.black%4010gen.com&avatarId=11709" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=thomasr&avatarId=11906" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=scotthernandez&avatarId=13248" : 4,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=jeff.yemin&avatarId=12603" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=milkie&avatarId=13238" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=redbeard0531&avatarId=13244" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.avatarUrls.48x48" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?avatarId=10122" : 449,
            "https://jira.mongodb.org/secure/useravatar?ownerId=alvin&avatarId=13010" : 99,
            "https://jira.mongodb.org/secure/useravatar?ownerId=ian%4010gen.com&avatarId=11023" : 103,
            "https://jira.mongodb.org/secure/useravatar?ownerId=dwight_10gen&avatarId=12244" : 9,
            "https://jira.mongodb.org/secure/useravatar?ownerId=brandon.black%4010gen.com&avatarId=11709" : 2,
            "https://jira.mongodb.org/secure/useravatar?ownerId=thomasr&avatarId=11906" : 1,
            "https://jira.mongodb.org/secure/useravatar?ownerId=scotthernandez&avatarId=13248" : 4,
            "https://jira.mongodb.org/secure/useravatar?ownerId=jeff.yemin&avatarId=12603" : 1,
            "https://jira.mongodb.org/secure/useravatar?ownerId=milkie&avatarId=13238" : 1,
            "https://jira.mongodb.org/secure/useravatar?ownerId=redbeard0531&avatarId=13244" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.avatarUrls.32x32" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=medium&avatarId=10122" : 449,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=alvin&avatarId=13010" : 99,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=ian%4010gen.com&avatarId=11023" : 103,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=dwight_10gen&avatarId=12244" : 9,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=brandon.black%4010gen.com&avatarId=11709" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=thomasr&avatarId=11906" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=scotthernandez&avatarId=13248" : 4,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=jeff.yemin&avatarId=12603" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=milkie&avatarId=13238" : 1,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=redbeard0531&avatarId=13244" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.emailAddress" : {
        "$data" : {
            "eliot@10gen.com" : 377,
            "alvin@mongodb.com" : 99,
            "ian@mongodb.com" : 103,
            "aaron@10gen.com" : 63,
            "dwight@10gen.com" : 9,
            "mike@10gen.com" : 5,
            "brandon.black@10gen.com" : 2,
            "kristina@10gen.com" : 2,
            "yun@nomitor.com" : 1,
            "Thomas.Rueckstiess@10gen.com" : 1,
            "david.hows@10gen.com" : 1,
            "scott@mongodb.com" : 4,
            "jeff.yemin@mongodb.com" : 1,
            "milkie@10gen.com" : 1,
            "mathias@10gen.com" : 1
        },
        "$count" : 670,
        "$type" : "category",
        "$prob" : 1
    },
    "changelog.histories.author.active" : {
        "$data" : {

        },
        "$count" : 670,
        "$type" : "boolean",
        "$prob" : 1
    },
    "changelog.histories.id" : {
        "$count" : 670,
        "$type" : "text",
        "$prob" : 1
    },
    "changelog.maxResults" : {
        "$data" : {
            "min" : 0,
            "max" : 24
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "fields" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.customfield_10558" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks" : {
        "$array" : true,
        "$count" : 8,
        "$prob" : 0.08
    },
    "fields.issuelinks.self" : {
        "$count" : 8,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue" : {
        "$count" : 4,
        "$prob" : 0.5
    },
    "fields.issuelinks.outwardIssue.fields" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/statuses/closed.png" : 2,
            "https://jira.mongodb.org/images/icons/statuses/resolved.png" : 1,
            "https://jira.mongodb.org/images/icons/statuses/open.png" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/status/6" : 2,
            "https://jira.mongodb.org/rest/api/2/status/5" : 1,
            "https://jira.mongodb.org/rest/api/2/status/1" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status.description" : {
        "$data" : {
            "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened." : 2,
            "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed." : 1,
            "The issue is open and ready for the assignee to start work on it." : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status.name" : {
        "$data" : {
            "Closed" : 2,
            "Resolved" : 1,
            "Open" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.status.id" : {
        "$data" : {
            "1" : 1,
            "5" : 1,
            "6" : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.priority" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.priority.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/priorities/major.png" : 3,
            "https://jira.mongodb.org/images/icons/priorities/minor.png" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.priority.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/priority/3" : 3,
            "https://jira.mongodb.org/rest/api/2/priority/4" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.priority.name" : {
        "$data" : {
            "Major - P3" : 3,
            "Minor - P4" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.priority.id" : {
        "$data" : {
            "3" : 3,
            "4" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.description" : {
        "$data" : {
            "A new feature of the product, which has yet to be developed." : 3,
            "A problem which impairs or prevents the functions of the product." : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issuetype/2" : 3,
            "https://jira.mongodb.org/rest/api/2/issuetype/1" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/issuetypes/newfeature.png" : 3,
            "https://jira.mongodb.org/images/icons/issuetypes/bug.png" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.subtask" : {
        "$data" : {

        },
        "$count" : 4,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.id" : {
        "$data" : {
            "1" : 1,
            "2" : 3
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.issuetype.name" : {
        "$data" : {
            "New Feature" : 3,
            "Bug" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.fields.summary" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.self" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.id" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.outwardIssue.key" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.type" : {
        "$count" : 8,
        "$prob" : 1
    },
    "fields.issuelinks.type.inward" : {
        "$data" : {
            "is depended on by" : 2,
            "is duplicated by" : 4,
            "is related to" : 2
        },
        "$count" : 8,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.type.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issueLinkType/10011" : 2,
            "https://jira.mongodb.org/rest/api/2/issueLinkType/10010" : 4,
            "https://jira.mongodb.org/rest/api/2/issueLinkType/10012" : 2
        },
        "$count" : 8,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.type.id" : {
        "$data" : {
            "10010" : 4,
            "10011" : 2,
            "10012" : 2
        },
        "$count" : 8,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.type.name" : {
        "$data" : {
            "Depends" : 2,
            "Duplicate" : 4,
            "Related" : 2
        },
        "$count" : 8,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.type.outward" : {
        "$data" : {
            "depends on" : 2,
            "duplicates" : 4,
            "related to" : 2
        },
        "$count" : 8,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.id" : {
        "$count" : 8,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue" : {
        "$count" : 4,
        "$prob" : 0.5
    },
    "fields.issuelinks.inwardIssue.fields" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/statuses/closed.png" : 3,
            "https://jira.mongodb.org/images/icons/statuses/open.png" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/status/6" : 3,
            "https://jira.mongodb.org/rest/api/2/status/1" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status.description" : {
        "$data" : {
            "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened." : 3,
            "The issue is open and ready for the assignee to start work on it." : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status.name" : {
        "$data" : {
            "Closed" : 3,
            "Open" : 1
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.status.id" : {
        "$data" : {
            "1" : 1,
            "6" : 3
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.priority" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.priority.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/priorities/major.png" : 4
        },
        "$count" : 4,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.priority.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/priority/3" : 4
        },
        "$count" : 4,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.priority.name" : {
        "$data" : {
            "Major - P3" : 4
        },
        "$count" : 4,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.priority.id" : {
        "$data" : {
            "3" : 4
        },
        "$count" : 4,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype" : {
        "$count" : 4,
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.description" : {
        "$data" : {
            "A new feature of the product, which has yet to be developed." : 2,
            "An improvement or enhancement to an existing feature or task." : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issuetype/2" : 2,
            "https://jira.mongodb.org/rest/api/2/issuetype/4" : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/issuetypes/newfeature.png" : 2,
            "https://jira.mongodb.org/images/icons/issuetypes/improvement.png" : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.subtask" : {
        "$data" : {

        },
        "$count" : 4,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.id" : {
        "$data" : {
            "2" : 2,
            "4" : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.issuetype.name" : {
        "$data" : {
            "New Feature" : 2,
            "Improvement" : 2
        },
        "$count" : 4,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.fields.summary" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.self" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.id" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.issuelinks.inwardIssue.key" : {
        "$count" : 4,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.labels" : {
        "$array" : true
    },
    "fields.customfield_11452" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10951" : {
        "$count" : 100,
        "$type" : {
            "null" : 99,
            "object" : 1
        },
        "$prob" : 1
    },
    "fields.customfield_10951.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/customFieldOption/10748" : 1
        },
        "$count" : 1,
        "$type" : "const",
        "$prob" : 0.01
    },
    "fields.customfield_10951.id" : {
        "$data" : {
            "10748" : 1
        },
        "$count" : 1,
        "$type" : "const",
        "$prob" : 0.01
    },
    "fields.customfield_10951.value" : {
        "$data" : {
            "Needed" : 1
        },
        "$count" : 1,
        "$type" : "const",
        "$prob" : 0.01
    },
    "fields.customfield_11450" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_11451" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10051" : {
        "$data" : {

        },
        "$count" : 181,
        "$type" : "category",
        "$array" : true,
        "$prob" : 1.81
    },
    "fields.customfield_10050" : {
        "$data" : {
            "0.0" : 26,
            "1.0" : 33,
            "5.0" : 5,
            "3.0" : 8,
            "6.0" : 5,
            "2.0" : 9,
            "4.0" : 9,
            "7.0" : 2,
            "16.0" : 1,
            "8.0" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.customfield_10053" : {
        "$count" : 100,
        "$type" : {
            "null" : 4,
            "string" : 96
        },
        "$prob" : 1
    },
    "fields.customfield_10052" : {
        "$data" : {
            "6393600" : 1,
            "6480000" : 1,
            "15638400" : 1,
            "23932800" : 1,
            "109987200" : 1,
            "115862400" : 1,
            "134092800" : 1,
            "136598400" : 1,
            "143683200" : 1,
            "146966400" : 1,
            "147312000" : 1,
            "148348800" : 4,
            "152928000" : 2,
            "153792000" : 4,
            "155779200" : 1,
            "156902400" : 2,
            "159062400" : 1,
            "159321600" : 1,
            "159580800" : 2,
            "159840000" : 1,
            "159926400" : 2,
            "160012800" : 3,
            "160185600" : 2,
            "160272000" : 2,
            "160444800" : 1,
            "160531200" : 3,
            "160617600" : 2,
            "160704000" : 4,
            "160790400" : 7,
            "161136000" : 5,
            "161222400" : 2,
            "161308800" : 5,
            "161395200" : 7,
            "161481600" : 2,
            "161913600" : 1,
            "162000000" : 3,
            "162086400" : 1,
            "162259200" : 5,
            "162691200" : 1,
            "162950400" : 2,
            "163036800" : 1,
            "163123200" : 1,
            "163555200" : 2,
            "163728000" : 2,
            "163900800" : 1,
            "164419200" : 2,
            "164851200" : 1,
            "164937600" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.customfield_10055" : {
        "$count" : 100,
        "$type" : {
            "null" : 46,
            "string" : 54
        },
        "$prob" : 1
    },
    "fields.customfield_10057" : {
        "$data" : {
            "false" : 51,
            "true" : 49
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.customfield_10056" : {
        "$data" : {
            "schwerin(schwerin)" : 1,
            "ian@10gen.com(ian@10gen.com)" : 94,
            "matt.kangas@10gen.com(matt.kangas@10gen.com)" : 1,
            "brandon.black@10gen.com(brandon.black@10gen.com)" : 1,
            "thomasr(thomasr)" : 1,
            "scotthernandez(scotthernandez)" : 1,
            "milkie(milkie)" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.customfield_10011" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_11151" : {
        "$count" : 100,
        "$type" : {
            "string" : 28,
            "date" : 72
        },
        "$prob" : 1
    },
    "fields.priority" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.priority.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/priorities/major.png" : 57,
            "https://jira.mongodb.org/images/icons/priorities/minor.png" : 37,
            "https://jira.mongodb.org/images/icons/priorities/trivial.png" : 4,
            "https://jira.mongodb.org/images/icons/priorities/critical.png" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.priority.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/priority/3" : 57,
            "https://jira.mongodb.org/rest/api/2/priority/4" : 37,
            "https://jira.mongodb.org/rest/api/2/priority/5" : 4,
            "https://jira.mongodb.org/rest/api/2/priority/2" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.priority.name" : {
        "$data" : {
            "Major - P3" : 57,
            "Minor - P4" : 37,
            "Trivial - P5" : 4,
            "Critical - P2" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.priority.id" : {
        "$data" : {
            "2" : 2,
            "3" : 57,
            "4" : 37,
            "5" : 4
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.votes" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.votes.hasVoted" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.votes.self" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.votes.votes" : {
        "$data" : {
            "min" : 0,
            "max" : 37
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "fields.customfield_11250" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_11861" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.fixVersions" : {
        "$count" : 68,
        "$array" : true,
        "$prob" : 0.68
    },
    "fields.fixVersions.archived" : {
        "$data" : {

        },
        "$count" : 68,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.fixVersions.description" : {
        "$data" : {
            "" : 62,
            "for cases that are random " : 4,
            "Development Planning" : 1,
            "1st 1.3.x release" : 1
        },
        "$count" : 68,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.fixVersions.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/version/10170" : 1,
            "https://jira.mongodb.org/rest/api/2/version/10010" : 4,
            "https://jira.mongodb.org/rest/api/2/version/10013" : 32,
            "https://jira.mongodb.org/rest/api/2/version/10122" : 2,
            "https://jira.mongodb.org/rest/api/2/version/10021" : 2,
            "https://jira.mongodb.org/rest/api/2/version/10016" : 1,
            "https://jira.mongodb.org/rest/api/2/version/10015" : 4,
            "https://jira.mongodb.org/rest/api/2/version/10014" : 12,
            "https://jira.mongodb.org/rest/api/2/version/10213" : 1,
            "https://jira.mongodb.org/rest/api/2/version/10100" : 1,
            "https://jira.mongodb.org/rest/api/2/version/10020" : 3,
            "https://jira.mongodb.org/rest/api/2/version/10018" : 5
        },
        "$count" : 68,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.fixVersions.released" : {
        "$data" : {

        },
        "$count" : 68,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.fixVersions.id" : {
        "$data" : {
            "10010" : 4,
            "10013" : 32,
            "10014" : 12,
            "10015" : 4,
            "10016" : 1,
            "10018" : 5,
            "10020" : 3,
            "10021" : 2,
            "10100" : 1,
            "10122" : 2,
            "10170" : 1,
            "10213" : 1
        },
        "$count" : 68,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.fixVersions.name" : {
        "$data" : {
            "minor tech improvements" : 1,
            "0.9.8" : 4,
            "0.9.3" : 32,
            "1.3.3" : 2,
            "0.9.7" : 2,
            "features we're not sure of" : 1,
            "random buildbot failures" : 4,
            "0.9.4" : 12,
            "Planning Bucket A" : 1,
            "1.3.0" : 1,
            "0.9.6" : 3,
            "0.9.5" : 5
        },
        "$count" : 68,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.fixVersions.releaseDate" : {
        "$data" : {
            "2009-08-14" : 4,
            "2009-05-29" : 32,
            "2010-03-02" : 2,
            "2009-07-29" : 2,
            "2014-01-01" : 4,
            "2009-06-09" : 12,
            "2009-12-31" : 1,
            "2009-07-07" : 3,
            "2009-06-22" : 5
        },
        "$count" : 65,
        "$type" : "category",
        "$prob" : 0.9558823529411765
    },
    "fields.environment" : {
        "$count" : 100,
        "$type" : {
            "null" : 92,
            "string" : 8
        },
        "$prob" : 1
    },
    "fields.customfield_10857" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.status" : {
        "$data" : {
            "Open" : 4,
            "Closed" : 96
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.customfield_10559" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.subtasks" : {
        "$array" : true,
        "$count" : 9,
        "$prob" : 0.09
    },
    "fields.subtasks.fields" : {
        "$count" : 9,
        "$prob" : 1
    },
    "fields.subtasks.fields.status" : {
        "$count" : 9,
        "$prob" : 1
    },
    "fields.subtasks.fields.status.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/statuses/closed.png" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.status.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/status/6" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.status.description" : {
        "$data" : {
            "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened." : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.status.name" : {
        "$data" : {
            "Closed" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.status.id" : {
        "$data" : {
            "6" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.priority" : {
        "$count" : 9,
        "$prob" : 1
    },
    "fields.subtasks.fields.priority.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/priorities/trivial.png" : 1,
            "https://jira.mongodb.org/images/icons/priorities/minor.png" : 3,
            "https://jira.mongodb.org/images/icons/priorities/major.png" : 5
        },
        "$count" : 9,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.subtasks.fields.priority.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/priority/5" : 1,
            "https://jira.mongodb.org/rest/api/2/priority/4" : 3,
            "https://jira.mongodb.org/rest/api/2/priority/3" : 5
        },
        "$count" : 9,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.subtasks.fields.priority.name" : {
        "$data" : {
            "Trivial - P5" : 1,
            "Minor - P4" : 3,
            "Major - P3" : 5
        },
        "$count" : 9,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.subtasks.fields.priority.id" : {
        "$data" : {
            "3" : 5,
            "4" : 3,
            "5" : 1
        },
        "$count" : 9,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype" : {
        "$count" : 9,
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.description" : {
        "$data" : {
            "The sub-task of the issue" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issuetype/5" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/issuetypes/subtask_alternate.png" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.subtask" : {
        "$data" : {

        },
        "$count" : 9,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.id" : {
        "$data" : {
            "5" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.issuetype.name" : {
        "$data" : {
            "Sub-task" : 9
        },
        "$count" : 9,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.subtasks.fields.summary" : {
        "$count" : 9,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.subtasks.self" : {
        "$count" : 9,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.subtasks.id" : {
        "$count" : 9,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.subtasks.key" : {
        "$count" : 9,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.description" : {
        "$count" : 100,
        "$type" : {
            "string" : 77,
            "null" : 23
        },
        "$prob" : 1
    },
    "fields.reporter" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.reporter.displayName" : {
        "$data" : {
            "Andy Schwerin" : 2,
            "Bob" : 1,
            "Eliot Horowitz" : 47,
            "Dwight Merriman" : 2,
            "Liam Staskawicz" : 2,
            "Aaron Staple" : 22,
            "Jim Jones" : 3,
            "Michael Dirolf" : 6,
            "Kristina Chodorow" : 3,
            "jeff jenkins" : 2,
            "Alan Wright" : 1,
            "Yun Huang Yong" : 5,
            "Jon Crosby" : 1,
            "Niko Schmuck" : 2,
            "Elcio Nakashima" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.name" : {
        "$data" : {
            "schwerin" : 2,
            "bob" : 1,
            "eliot" : 47,
            "dwight_10gen" : 2,
            "liamstask" : 2,
            "aaron" : 22,
            "raz" : 3,
            "mike" : 6,
            "kristina" : 3,
            "jeff" : 2,
            "alanw" : 1,
            "goosmurf" : 5,
            "jcrosby" : 1,
            "nschmuck" : 2,
            "elciok" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/user?username=schwerin" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=bob" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=eliot" : 47,
            "https://jira.mongodb.org/rest/api/2/user?username=dwight_10gen" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=liamstask" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=aaron" : 22,
            "https://jira.mongodb.org/rest/api/2/user?username=raz" : 3,
            "https://jira.mongodb.org/rest/api/2/user?username=mike" : 6,
            "https://jira.mongodb.org/rest/api/2/user?username=kristina" : 3,
            "https://jira.mongodb.org/rest/api/2/user?username=jeff" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=alanw" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=goosmurf" : 5,
            "https://jira.mongodb.org/rest/api/2/user?username=jcrosby" : 1,
            "https://jira.mongodb.org/rest/api/2/user?username=nschmuck" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=elciok" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.avatarUrls" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.reporter.avatarUrls.24x24" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=schwerin&avatarId=13250" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=small&avatarId=10122" : 96,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=dwight_10gen&avatarId=12244" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.avatarUrls.16x16" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=schwerin&avatarId=13250" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&avatarId=10122" : 96,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=dwight_10gen&avatarId=12244" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.avatarUrls.48x48" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?ownerId=schwerin&avatarId=13250" : 2,
            "https://jira.mongodb.org/secure/useravatar?avatarId=10122" : 96,
            "https://jira.mongodb.org/secure/useravatar?ownerId=dwight_10gen&avatarId=12244" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.avatarUrls.32x32" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=schwerin&avatarId=13250" : 2,
            "https://jira.mongodb.org/secure/useravatar?size=medium&avatarId=10122" : 96,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=dwight_10gen&avatarId=12244" : 2
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.emailAddress" : {
        "$data" : {
            "schwerin@mongodb.com" : 2,
            "bob@robotlake.com" : 1,
            "eliot@10gen.com" : 47,
            "dwight@10gen.com" : 2,
            "lstask@gmail.com" : 2,
            "aaron@10gen.com" : 22,
            "filter-mongodb-jira@mbox.bz" : 3,
            "mike@10gen.com" : 6,
            "kristina@10gen.com" : 3,
            "jeff@shopwiki.com" : 2,
            "alanwright.atex@googlemail.com" : 1,
            "yun@nomitor.com" : 5,
            "jon@joncrosby.me" : 1,
            "niko@nava.de" : 2,
            "elciok@gmail.com" : 1
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.reporter.active" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.customfield_10550" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10551" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10552" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10553" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10554" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_11453" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10557" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.watches" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.watches.self" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "fields.watches.watchCount" : {
        "$data" : {
            "min" : 0,
            "max" : 27
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "fields.watches.isWatching" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.customfield_10257" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10166" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.customfield_10000" : {
        "$count" : 100,
        "$type" : {
            "object" : 2,
            "null" : 98
        },
        "$prob" : 1
    },
    "fields.customfield_10000.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/customFieldOption/10000" : 2
        },
        "$count" : 2,
        "$type" : "const",
        "$prob" : 0.02
    },
    "fields.customfield_10000.id" : {
        "$data" : {
            "10000" : 2
        },
        "$count" : 2,
        "$type" : "const",
        "$prob" : 0.02
    },
    "fields.customfield_10000.value" : {
        "$data" : {
            "No" : 2
        },
        "$count" : 2,
        "$type" : "const",
        "$prob" : 0.02
    },
    "fields.customfield_10031" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.assignee" : {
        "$count" : 100,
        "$type" : {
            "null" : 4,
            "object" : 96
        },
        "$prob" : 1
    },
    "fields.assignee.displayName" : {
        "$data" : {
            "Eliot Horowitz" : 46,
            "Michael Dirolf" : 2,
            "Aaron Staple" : 38,
            "Dwight Merriman" : 9,
            "Alan Wright" : 1
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.assignee.name" : {
        "$data" : {
            "eliot" : 46,
            "mike" : 2,
            "aaron" : 38,
            "dwight_10gen" : 9,
            "alanw" : 1
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.assignee.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/user?username=eliot" : 46,
            "https://jira.mongodb.org/rest/api/2/user?username=mike" : 2,
            "https://jira.mongodb.org/rest/api/2/user?username=aaron" : 38,
            "https://jira.mongodb.org/rest/api/2/user?username=dwight_10gen" : 9,
            "https://jira.mongodb.org/rest/api/2/user?username=alanw" : 1
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.assignee.avatarUrls" : {
        "$count" : 96,
        "$prob" : 0.96
    },
    "fields.assignee.avatarUrls.24x24" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=small&avatarId=10122" : 87,
            "https://jira.mongodb.org/secure/useravatar?size=small&ownerId=dwight_10gen&avatarId=12244" : 9
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.assignee.avatarUrls.16x16" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&avatarId=10122" : 87,
            "https://jira.mongodb.org/secure/useravatar?size=xsmall&ownerId=dwight_10gen&avatarId=12244" : 9
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.assignee.avatarUrls.48x48" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?avatarId=10122" : 87,
            "https://jira.mongodb.org/secure/useravatar?ownerId=dwight_10gen&avatarId=12244" : 9
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.assignee.avatarUrls.32x32" : {
        "$data" : {
            "https://jira.mongodb.org/secure/useravatar?size=medium&avatarId=10122" : 87,
            "https://jira.mongodb.org/secure/useravatar?size=medium&ownerId=dwight_10gen&avatarId=12244" : 9
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.assignee.emailAddress" : {
        "$data" : {
            "eliot@10gen.com" : 46,
            "mike@10gen.com" : 2,
            "aaron@10gen.com" : 38,
            "dwight@10gen.com" : 9,
            "alanwright.atex@googlemail.com" : 1
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.assignee.active" : {
        "$data" : {

        },
        "$count" : 96,
        "$type" : "boolean",
        "$prob" : 0.96
    },
    "fields.versions" : {
        "$array" : true,
        "$count" : 28,
        "$prob" : 0.28
    },
    "fields.versions.archived" : {
        "$data" : {

        },
        "$count" : 28,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.versions.name" : {
        "$data" : {
            "0.9.3" : 25,
            "1.1.0" : 1,
            "0.9.4" : 2
        },
        "$count" : 28,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.versions.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/version/10013" : 25,
            "https://jira.mongodb.org/rest/api/2/version/10011" : 1,
            "https://jira.mongodb.org/rest/api/2/version/10014" : 2
        },
        "$count" : 28,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.versions.releaseDate" : {
        "$data" : {
            "2009-05-29" : 25,
            "2009-09-14" : 1,
            "2009-06-09" : 2
        },
        "$count" : 28,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.versions.released" : {
        "$data" : {

        },
        "$count" : 28,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.versions.id" : {
        "$data" : {
            "10011" : 1,
            "10013" : 25,
            "10014" : 2
        },
        "$count" : 28,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.versions.description" : {
        "$data" : {
            "" : 27,
            "Development Release" : 1
        },
        "$count" : 28,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.resolutiondate" : {
        "$count" : 100,
        "$type" : {
            "null" : 4,
            "date" : 96
        },
        "$prob" : 1
    },
    "fields.lastViewed" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "null",
        "$prob" : 1
    },
    "fields.project" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.project.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/project/SERVER" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.avatarUrls" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.project.avatarUrls.24x24" : {
        "$data" : {
            "https://jira.mongodb.org/secure/projectavatar?size=small&pid=10000&avatarId=13900" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.avatarUrls.16x16" : {
        "$data" : {
            "https://jira.mongodb.org/secure/projectavatar?size=xsmall&pid=10000&avatarId=13900" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.avatarUrls.48x48" : {
        "$data" : {
            "https://jira.mongodb.org/secure/projectavatar?pid=10000&avatarId=13900" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.avatarUrls.32x32" : {
        "$data" : {
            "https://jira.mongodb.org/secure/projectavatar?size=medium&pid=10000&avatarId=13900" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.id" : {
        "$data" : {
            "10000" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.key" : {
        "$data" : {
            "SERVER" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.project.name" : {
        "$data" : {
            "Core Server" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "fields.components" : {
        "$count" : 80,
        "$array" : true,
        "$prob" : 0.8
    },
    "fields.components.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/component/10128" : 1,
            "https://jira.mongodb.org/rest/api/2/component/10002" : 21,
            "https://jira.mongodb.org/rest/api/2/component/10001" : 12,
            "https://jira.mongodb.org/rest/api/2/component/10010" : 16,
            "https://jira.mongodb.org/rest/api/2/component/10735" : 1,
            "https://jira.mongodb.org/rest/api/2/component/10027" : 4,
            "https://jira.mongodb.org/rest/api/2/component/10003" : 13,
            "https://jira.mongodb.org/rest/api/2/component/10000" : 5,
            "https://jira.mongodb.org/rest/api/2/component/10019" : 1,
            "https://jira.mongodb.org/rest/api/2/component/10025" : 3,
            "https://jira.mongodb.org/rest/api/2/component/10847" : 1,
            "https://jira.mongodb.org/rest/api/2/component/10030" : 1,
            "https://jira.mongodb.org/rest/api/2/component/10018" : 1
        },
        "$count" : 80,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.components.id" : {
        "$data" : {
            "10000" : 5,
            "10001" : 12,
            "10002" : 21,
            "10003" : 13,
            "10010" : 16,
            "10018" : 1,
            "10019" : 1,
            "10025" : 3,
            "10027" : 4,
            "10030" : 1,
            "10128" : 1,
            "10735" : 1,
            "10847" : 1
        },
        "$count" : 80,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.components.name" : {
        "$data" : {
            "Internal Code" : 1,
            "JavaScript" : 21,
            "Usability" : 12,
            "Replication/Pairing" : 16,
            "Logging" : 1,
            "Indexing" : 4,
            "Shell" : 13,
            "Stability" : 5,
            "Performance" : 1,
            "Admin" : 3,
            "Diagnostics" : 1,
            "Querying" : 1,
            "C++ Driver" : 1
        },
        "$count" : 80,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuetype" : {
        "$count" : 100,
        "$prob" : 1
    },
    "fields.issuetype.description" : {
        "$data" : {
            "An improvement or enhancement to an existing feature or task." : 36,
            "A problem which impairs or prevents the functions of the product." : 40,
            "A new feature of the product, which has yet to be developed." : 17,
            "A task that needs to be done." : 1,
            "The sub-task of the issue" : 6
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuetype.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issuetype/4" : 36,
            "https://jira.mongodb.org/rest/api/2/issuetype/1" : 40,
            "https://jira.mongodb.org/rest/api/2/issuetype/2" : 17,
            "https://jira.mongodb.org/rest/api/2/issuetype/3" : 1,
            "https://jira.mongodb.org/rest/api/2/issuetype/5" : 6
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuetype.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/issuetypes/improvement.png" : 36,
            "https://jira.mongodb.org/images/icons/issuetypes/bug.png" : 40,
            "https://jira.mongodb.org/images/icons/issuetypes/newfeature.png" : 17,
            "https://jira.mongodb.org/images/icons/issuetypes/task.png" : 1,
            "https://jira.mongodb.org/images/icons/issuetypes/subtask_alternate.png" : 6
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuetype.subtask" : {
        "$data" : {

        },
        "$count" : 100,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.issuetype.id" : {
        "$data" : {
            "1" : 40,
            "2" : 17,
            "3" : 1,
            "4" : 36,
            "5" : 6
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.issuetype.name" : {
        "$data" : {
            "Improvement" : 36,
            "Bug" : 40,
            "New Feature" : 17,
            "Task" : 1,
            "Sub-task" : 6
        },
        "$count" : 100,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.resolution" : {
        "$count" : 100,
        "$type" : {
            "null" : 4,
            "object" : 96
        },
        "$prob" : 1
    },
    "fields.resolution.id" : {
        "$data" : {
            "1" : 81,
            "2" : 6,
            "3" : 7,
            "5" : 2
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.resolution.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/resolution/5" : 2,
            "https://jira.mongodb.org/rest/api/2/resolution/1" : 81,
            "https://jira.mongodb.org/rest/api/2/resolution/2" : 6,
            "https://jira.mongodb.org/rest/api/2/resolution/3" : 7
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.resolution.description" : {
        "$data" : {
            "All attempts at reproducing this issue failed, or not enough information was available to reproduce the issue. Reading the code produces no clues as to why this behavior would occur. If more information appears later, please reopen the issue." : 2,
            "A fix for this issue is checked into the tree and tested." : 81,
            "The problem described is an issue which will never be fixed." : 6,
            "The problem is a duplicate of an existing issue." : 7
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.resolution.name" : {
        "$data" : {
            "Cannot Reproduce" : 2,
            "Fixed" : 81,
            "Won't Fix" : 6,
            "Duplicate" : 7
        },
        "$count" : 96,
        "$type" : "category",
        "$prob" : 0.96
    },
    "fields.workratio" : {
        "$data" : {
            "min" : -1,
            "max" : -1
        },
        "$count" : 100,
        "$type" : "number",
        "$prob" : 1
    },
    "fields.customfield_10750" : {
        "$data" : {

        },
        "$count" : 40,
        "$type" : "null",
        "$prob" : 0.4
    },
    "fields.customfield_10032" : {
        "$data" : {

        },
        "$count" : 40,
        "$type" : "null",
        "$prob" : 0.4
    },
    "fields.parent" : {
        "$count" : 6,
        "$prob" : 0.06
    },
    "fields.parent.fields" : {
        "$count" : 6,
        "$prob" : 1
    },
    "fields.parent.fields.status" : {
        "$count" : 6,
        "$prob" : 1
    },
    "fields.parent.fields.status.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/statuses/closed.png" : 5,
            "https://jira.mongodb.org/images/icons/statuses/open.png" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.status.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/status/6" : 5,
            "https://jira.mongodb.org/rest/api/2/status/1" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.status.description" : {
        "$data" : {
            "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened." : 5,
            "The issue is open and ready for the assignee to start work on it." : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.status.name" : {
        "$data" : {
            "Closed" : 5,
            "Open" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.status.id" : {
        "$data" : {
            "1" : 1,
            "6" : 5
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.priority" : {
        "$count" : 6,
        "$prob" : 1
    },
    "fields.parent.fields.priority.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/priorities/major.png" : 3,
            "https://jira.mongodb.org/images/icons/priorities/minor.png" : 2,
            "https://jira.mongodb.org/images/icons/priorities/trivial.png" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.priority.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/priority/3" : 3,
            "https://jira.mongodb.org/rest/api/2/priority/4" : 2,
            "https://jira.mongodb.org/rest/api/2/priority/5" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.priority.name" : {
        "$data" : {
            "Major - P3" : 3,
            "Minor - P4" : 2,
            "Trivial - P5" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.priority.id" : {
        "$data" : {
            "3" : 3,
            "4" : 2,
            "5" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype" : {
        "$count" : 6,
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.description" : {
        "$data" : {
            "A new feature of the product, which has yet to be developed." : 4,
            "An improvement or enhancement to an existing feature or task." : 2
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issuetype/2" : 4,
            "https://jira.mongodb.org/rest/api/2/issuetype/4" : 2
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.iconUrl" : {
        "$data" : {
            "https://jira.mongodb.org/images/icons/issuetypes/newfeature.png" : 4,
            "https://jira.mongodb.org/images/icons/issuetypes/improvement.png" : 2
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.subtask" : {
        "$data" : {

        },
        "$count" : 6,
        "$type" : "boolean",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.id" : {
        "$data" : {
            "2" : 4,
            "4" : 2
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.issuetype.name" : {
        "$data" : {
            "New Feature" : 4,
            "Improvement" : 2
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.fields.summary" : {
        "$data" : {
            " make shell use spider monkey" : 2,
            "conserve number types when going bson -> js -> bson" : 1,
            "dbcursor.count() should update based on limit() and skip()" : 1,
            "make replication tests faster" : 1,
            "case insensitive index" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.self" : {
        "$data" : {
            "https://jira.mongodb.org/rest/api/2/issue/10124" : 2,
            "https://jira.mongodb.org/rest/api/2/issue/10157" : 1,
            "https://jira.mongodb.org/rest/api/2/issue/10052" : 1,
            "https://jira.mongodb.org/rest/api/2/issue/10033" : 1,
            "https://jira.mongodb.org/rest/api/2/issue/10196" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.id" : {
        "$data" : {
            "10033" : 1,
            "10052" : 1,
            "10124" : 2,
            "10157" : 1,
            "10196" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "fields.parent.key" : {
        "$data" : {
            "SERVER-43" : 2,
            "SERVER-65" : 1,
            "SERVER-16" : 1,
            "SERVER-10" : 1,
            "SERVER-90" : 1
        },
        "$count" : 6,
        "$type" : "category",
        "$prob" : 1
    },
    "self" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "subsource" : {
        "$data" : {
            "SERVER" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "project" : {
        "$data" : {
            "SERVER" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "key" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "id" : {
        "$count" : 100,
        "$type" : "text",
        "$prob" : 1
    },
    "expand" : {
        "$data" : {
            "editmeta,renderedFields,transitions,changelog,operations" : 100
        },
        "$count" : 100,
        "$type" : "const",
        "$prob" : 1
    },
    "PM" : {
        "$count" : 62,
        "$prob" : 0.62
    },
    "PM.categories" : {
        "$count" : 62,
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Week" : {
        "$count" : 62,
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Week.week" : {
        "$data" : {
            "min" : 14,
            "max" : 44
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Week.year" : {
        "$data" : {
            "min" : 2009,
            "max" : 2009
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Year" : {
        "$count" : 62,
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Year.year" : {
        "$data" : {
            "min" : 2009,
            "max" : 2009
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Month" : {
        "$count" : 62,
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Month.year" : {
        "$data" : {
            "min" : 2009,
            "max" : 2009
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    },
    "PM.categories.Fix Version Added Month.month" : {
        "$data" : {
            "min" : 4,
            "max" : 11
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    },
    "PM.quantities" : {
        "$count" : 62,
        "$prob" : 1
    },
    "PM.quantities.Time in INCOMING queue" : {
        "$data" : {
            "min" : 0.004166666666666667,
            "max" : 4867.8525
        },
        "$count" : 62,
        "$type" : "number",
        "$prob" : 1
    }
};