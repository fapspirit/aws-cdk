"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s3 = require("aws-cdk-lib/aws-s3");
const cdk = require("aws-cdk-lib");
const codebuild = require("aws-cdk-lib/aws-codebuild");
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-codebuild-buildspec-artifact-name');
const bucket = new s3.Bucket(stack, 'MyBucket', {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
});
new codebuild.Project(stack, 'MyProject', {
    buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
    }),
    grantReportGroupPermissions: false,
    artifacts: codebuild.Artifacts.s3({
        bucket,
        includeBuildId: false,
        packageZip: true,
        path: 'another/path',
        identifier: 'AddArtifact1',
    }),
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucHJvamVjdC1idWlsZHNwZWMtYXJ0aWZhY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZWcucHJvamVjdC1idWlsZHNwZWMtYXJ0aWZhY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXlDO0FBQ3pDLG1DQUFtQztBQUNuQyx1REFBdUQ7QUFFdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO0FBRTlFLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQzlDLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87Q0FDekMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDeEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQztJQUNGLDJCQUEyQixFQUFFLEtBQUs7SUFDbEMsU0FBUyxFQUNQLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE1BQU07UUFDTixjQUFjLEVBQUUsS0FBSztRQUNyQixVQUFVLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsY0FBYztRQUNwQixVQUFVLEVBQUUsY0FBYztLQUMzQixDQUFDO0NBQ0wsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBjb2RlYnVpbGQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNvZGVidWlsZCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbmNvbnN0IHN0YWNrID0gbmV3IGNkay5TdGFjayhhcHAsICdhd3MtY2RrLWNvZGVidWlsZC1idWlsZHNwZWMtYXJ0aWZhY3QtbmFtZScpO1xuXG5jb25zdCBidWNrZXQgPSBuZXcgczMuQnVja2V0KHN0YWNrLCAnTXlCdWNrZXQnLCB7XG4gIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG59KTtcblxubmV3IGNvZGVidWlsZC5Qcm9qZWN0KHN0YWNrLCAnTXlQcm9qZWN0Jywge1xuICBidWlsZFNwZWM6IGNvZGVidWlsZC5CdWlsZFNwZWMuZnJvbU9iamVjdCh7XG4gICAgdmVyc2lvbjogJzAuMicsXG4gIH0pLFxuICBncmFudFJlcG9ydEdyb3VwUGVybWlzc2lvbnM6IGZhbHNlLFxuICBhcnRpZmFjdHM6XG4gICAgY29kZWJ1aWxkLkFydGlmYWN0cy5zMyh7XG4gICAgICBidWNrZXQsXG4gICAgICBpbmNsdWRlQnVpbGRJZDogZmFsc2UsXG4gICAgICBwYWNrYWdlWmlwOiB0cnVlLFxuICAgICAgcGF0aDogJ2Fub3RoZXIvcGF0aCcsXG4gICAgICBpZGVudGlmaWVyOiAnQWRkQXJ0aWZhY3QxJyxcbiAgICB9KSxcbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==