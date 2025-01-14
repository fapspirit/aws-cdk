"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ = require("@aws-cdk/integ-tests-alpha");
const eks = require("aws-cdk-lib/aws-eks");
const app = new aws_cdk_lib_1.App();
const stack = new aws_cdk_lib_1.Stack(app, 'aws-eks-oidc-provider-test');
new eks.OpenIdConnectProvider(stack, 'NoClientsNoThumbprint', {
    url: `https://oidc.eks.${aws_cdk_lib_1.Stack.of(stack).region}.amazonaws.com/id/test2`,
});
new integ.IntegTest(app, 'aws-cdk-eks-oidc-provider', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuZWtzLW9pZGMtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5la3Mtb2lkYy1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF5QztBQUN6QyxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQUssQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQUUzRCxJQUFJLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7SUFDNUQsR0FBRyxFQUFFLG9CQUFvQixtQkFBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLHlCQUF5QjtDQUN6RSxDQUFDLENBQUM7QUFFSCxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLDJCQUEyQixFQUFFO0lBQ3BELFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUNuQixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIFN0YWNrIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgaW50ZWcgZnJvbSAnQGF3cy1jZGsvaW50ZWctdGVzdHMtYWxwaGEnO1xuaW1wb3J0ICogYXMgZWtzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1la3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsICdhd3MtZWtzLW9pZGMtcHJvdmlkZXItdGVzdCcpO1xuXG5uZXcgZWtzLk9wZW5JZENvbm5lY3RQcm92aWRlcihzdGFjaywgJ05vQ2xpZW50c05vVGh1bWJwcmludCcsIHtcbiAgdXJsOiBgaHR0cHM6Ly9vaWRjLmVrcy4ke1N0YWNrLm9mKHN0YWNrKS5yZWdpb259LmFtYXpvbmF3cy5jb20vaWQvdGVzdDJgLFxufSk7XG5cbm5ldyBpbnRlZy5JbnRlZ1Rlc3QoYXBwLCAnYXdzLWNkay1la3Mtb2lkYy1wcm92aWRlcicsIHtcbiAgdGVzdENhc2VzOiBbc3RhY2tdLFxufSk7XG5cbmFwcC5zeW50aCgpO1xuIl19