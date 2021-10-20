import { AdoptiumJavaDatasource } from './adoptium-java';
import { ArtifactoryDatasource } from './artifactory';
import { AwsMachineImageDataSource } from './aws-machine-image';
import { BitBucketTagsDatasource } from './bitbucket-tags';
import { CdnJsDatasource } from './cdnjs';
import { ClojureDatasource } from './clojure';
import { CrateDatasource } from './crate';
import { DartDatasource } from './dart';
import * as docker from './docker';
import { GalaxyDatasource } from './galaxy';
import { GalaxyCollectionDatasource } from './galaxy-collection';
import { GitRefsDatasource } from './git-refs';
import { GitTagsDatasource } from './git-tags';
import * as githubReleases from './github-releases';
import * as githubTags from './github-tags';
import { GitlabPackagesDatasource } from './gitlab-packages';
import { GitlabReleasesDatasource } from './gitlab-releases';
import * as gitlabTags from './gitlab-tags';
import { GoDatasource } from './go';
import { GolangVersionDatasource } from './golang-version';
import { GradleVersionDatasource } from './gradle-version';
import { HelmDatasource } from './helm';
import { HexDatasource } from './hex';
import { JenkinsPluginsDatasource } from './jenkins-plugins';
import * as maven from './maven';
import { NodeDatasource } from './node';
import * as npm from './npm';
import * as nuget from './nuget';
import { OrbDatasource } from './orb';
import { PackagistDatasource } from './packagist';
import * as pod from './pod';
import { PypiDatasource } from './pypi';
import * as repology from './repology';
import { RubyVersionDatasource } from './ruby-version';
import { RubyGemsDatasource } from './rubygems';
import * as sbtPackage from './sbt-package';
import * as sbtPlugin from './sbt-plugin';
import { TerraformModuleDatasource } from './terraform-module';
import { TerraformProviderDatasource } from './terraform-provider';
import type { DatasourceApi } from './types';

const api = new Map<string, DatasourceApi>();
export default api;

api.set(AdoptiumJavaDatasource.id, new AdoptiumJavaDatasource());
api.set(ArtifactoryDatasource.id, new ArtifactoryDatasource());
api.set(AwsMachineImageDataSource.id, new AwsMachineImageDataSource());
api.set('bitbucket-tags', new BitBucketTagsDatasource());
api.set('cdnjs', new CdnJsDatasource());
api.set('clojure', new ClojureDatasource());
api.set('crate', new CrateDatasource());
api.set('dart', new DartDatasource());
api.set('docker', docker);
api.set('galaxy', new GalaxyDatasource());
api.set('galaxy-collection', new GalaxyCollectionDatasource());
api.set('git-refs', new GitRefsDatasource());
api.set('git-tags', new GitTagsDatasource());
api.set('github-releases', githubReleases);
api.set('github-tags', githubTags);
api.set('gitlab-packages', new GitlabPackagesDatasource());
api.set(GitlabReleasesDatasource.id, new GitlabReleasesDatasource());
api.set('gitlab-tags', gitlabTags);
api.set('go', new GoDatasource());
api.set('golang-version', new GolangVersionDatasource());
api.set('gradle-version', new GradleVersionDatasource());
api.set('helm', new HelmDatasource());
api.set('hex', new HexDatasource());
api.set('jenkins-plugins', new JenkinsPluginsDatasource());
api.set('maven', maven);
api.set(NodeDatasource.id, new NodeDatasource());
api.set('npm', npm);
api.set('nuget', nuget);
api.set('orb', new OrbDatasource());
api.set('packagist', new PackagistDatasource());
api.set('pod', pod);
api.set('pypi', new PypiDatasource());
api.set('repology', repology);
api.set('ruby-version', new RubyVersionDatasource());
api.set(RubyGemsDatasource.id, new RubyGemsDatasource());
api.set('sbt-package', sbtPackage);
api.set('sbt-plugin', sbtPlugin);
api.set('terraform-module', new TerraformModuleDatasource());
api.set('terraform-provider', new TerraformProviderDatasource());
