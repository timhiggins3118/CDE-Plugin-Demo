module['exports'] = function changeGitHubIssueState(hook) {
    // Read task inputs
    //var request = require('request'),
    //    endPointProperties = hook.req.body.endPointProperties,
    //    user = endPointProperties.user,
    //    repository = endPointProperties.repository,
    //    authorization = endPointProperties.authorization,

    //    taskProperties = hook.req.body.taskProperties,
    //    issueId = taskProperties.issueId,
    //    newStatus = taskProperties.issueStatus;
    console.log("Tim Test")

    //authorization = authorization == "Trust me" ? hook.env.githubAuth : authorization;
    //headers = { 'Authorization': authorization, 'User-Agent': 'request' };
    //requestBody = JSON.stringify({ "state": newStatus });
    //console.log("Tim - user[" + user + "] repository[" + repository + "] issueId[" + issueId + "] will change to [" + newStatus + "]");

    // Update issuse using GitHub API
  //  var url = 'https://api.github.com/repos/' + user + '/' + repository + '/issues/' + issueId;
    //request.patch({ 'url': url, 'body': requestBody, 'headers': headers }, function (err, res, resBody) {
    //    if (err) {
    //        return hook.res.end(err.messsage);
    //    }

    //    // Build response
    //    hook.res.setHeader("Content-Type", "application/json");
    //    hook.res.end(JSON.stringify({
    //        'externalTaskExecutionStatus': 'FINISHED',
    //        'executionContext': {},
    //        'taskState': "Issue #" + issueId + " is " + newStatus,
    //        'detailedInfo': "Issue number " + issueId + " state is now " + newStatus,
    //        'progress': 100,
    //        'delayTillNextPoll': 0
    //    }));
    //})
};