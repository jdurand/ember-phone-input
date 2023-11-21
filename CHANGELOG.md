# Changelog


## v10.0.0-beta.0 (2023-11-21)

#### :boom: Breaking Change
* [#810](https://github.com/qonto/ember-phone-input/pull/810) feat: drop node v16 ([@vscav](https://github.com/vscav))

#### :rocket: Enhancement
* [#818](https://github.com/qonto/ember-phone-input/pull/818) feat: use `Sinon.JS` in integration tests ([@vscav](https://github.com/vscav))
* [#789](https://github.com/qonto/ember-phone-input/pull/789) refactor: migrate test-app package to TypeScript ([@vscav](https://github.com/vscav))
* [#749](https://github.com/qonto/ember-phone-input/pull/749) refactor: migrate addon package to TypeScript ([@m-jovan](https://github.com/m-jovan))
* [#745](https://github.com/qonto/ember-phone-input/pull/745) feat: migrate phone-input component to glimmer ([@m-jovan](https://github.com/m-jovan))

#### :memo: Documentation
* [#791](https://github.com/qonto/ember-phone-input/pull/791) chore: replace documentation application by markdown file ([@vscav](https://github.com/vscav))
* [#754](https://github.com/qonto/ember-phone-input/pull/754) chore: replace broken Travis CI badge ([@nicolasgasco](https://github.com/nicolasgasco))
* [#640](https://github.com/qonto/ember-phone-input/pull/640) fix: resolve PR link in changelog ([@vscav](https://github.com/vscav))

#### :house: Internal
* [#813](https://github.com/qonto/ember-phone-input/pull/813) chore(ci): remove unnecessary release script ([@vscav](https://github.com/vscav))
* [#796](https://github.com/qonto/ember-phone-input/pull/796) chore: install and use @qonto/eslint-config-typescript@1.0.0-rc.0 ([@vscav](https://github.com/vscav))
* [#777](https://github.com/qonto/ember-phone-input/pull/777) feat(ts-lint): allow use of private and protected syntax for classes in .ts files ([@vscav](https://github.com/vscav))
* [#747](https://github.com/qonto/ember-phone-input/pull/747) feat: setup typescript configuration ([@m-jovan](https://github.com/m-jovan))
* [#645](https://github.com/qonto/ember-phone-input/pull/645) fix: remove double pnpm installation ([@vscav](https://github.com/vscav))
* [#644](https://github.com/qonto/ember-phone-input/pull/644) fix: remove double node installation on CI ([@vscav](https://github.com/vscav))

#### Committers: 3
- Jovan Milosevic ([@m-jovan](https://github.com/m-jovan))
- Nicolas Gasco ([@nicolasgasco](https://github.com/nicolasgasco))
- Vincent Scavinner ([@vscav](https://github.com/vscav))

## v9.0.1 (2023-06-02)

#### :house: Internal

- [#625](https://github.com/qonto/ember-phone-input/pull/625) Migrate from yarn to pnpm ([@vscav](https://github.com/vscav))

#### Committers: 1

- Vincent Scavinner ([@vscav](https://github.com/vscav))

## v9.0.0 (2023-05-10)

#### :boom: Breaking Change

- [#602](https://github.com/qonto/ember-phone-input/pull/602) Drop node v14 support ([@anas7asia](https://github.com/anas7asia))

- [#590](https://github.com/qonto/ember-phone-input/pull/590) Update dependency intl-tel-input to v18 ([@renovate[bot]](https://github.com/apps/renovate))

- [#588](https://github.com/qonto/ember-phone-input/pull/602) Remove support for Ember 3.16 and 3.20 ([@anas7asia](https://github.com/anas7asia))

#### :rocket: Enhancement

- [#589](https://github.com/qonto/ember-phone-input/pull/589) Add ability to pass a custom placeholder argument ([@vscav](https://github.com/vscav))

- [#586](https://github.com/qonto/ember-phone-input/pull/586) Convert to v2 addon format ([@anas7asia](https://github.com/anas7asia))

#### Release notes

In the v1 addon flags image and CSS file were loaded globally in `index.js` thanks to `app.import`. After converting to the v2 addon format, it is not the case anymore: images and styles are loaded only on demand when the `<PhoneInput>` is used.

#### Committers: 2

- Vincent Scavinner ([@vscav](https://github.com/vscav))
- Anastasia ([@anas7asia](https://github.com/anas7asia))

## v9.0.0-alpha.2 (2023-05-10)

#### :bug: Bug Fix

- [#604](https://github.com/qonto/ember-phone-input/pull/604) Display autoPlaceholder when customPlaceholder is not provided ([@anas7asia](https://github.com/anas7asia))

#### Committers: 2

- Anastasia ([@anas7asia](https://github.com/anas7asia))
- Vincent Scavinner ([@vscav](https://github.com/vscav))

## v8.0.0 (2022-11-29)

#### :boom: Breaking Change

- [#492](https://github.com/qonto/ember-phone-input/pull/492) Update dependency ember-cli-htmlbars to v6 ([@renovate[bot]](https://github.com/apps/renovate))

#### :rocket: Enhancement

- [#506](https://github.com/qonto/ember-phone-input/pull/506) Use `:root` prefix to ensure correct `background-image` paths for embroider builds ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal

- [#473](https://github.com/qonto/ember-phone-input/pull/473) Configure Renovate ([@renovate[bot]](https://github.com/apps/renovate))
- [#470](https://github.com/qonto/ember-phone-input/pull/470) Update lockfile ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1

- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v7.1.1 (2022-09-13)

#### :memo: Documentation

- [#457](https://github.com/qonto/ember-phone-input/pull/457) Update README to add new illustration ([@dbendaou](https://github.com/dbendaou))

#### Committers: 1

- Djamel B. ([@dbendaou](https://github.com/dbendaou))

## v7.1.0 (2022-03-23)

#### :rocket: Enhancement

- [#427](https://github.com/qonto/ember-phone-input/pull/427) Add `onError` action callback ([@Turbo87](https://github.com/Turbo87))
- [#416](https://github.com/qonto/ember-phone-input/pull/416) CI: Automate release ([@zeppelin](https://github.com/zeppelin))

#### Committers: 2

- Gabor Babicz ([@zeppelin](https://github.com/zeppelin))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v7.0.1 (2022-02-14)

- Same as release v7.0.0

## v7.0.0 (2022-02-14)

#### :boom: Breaking Change

- [#357](https://github.com/qonto/ember-phone-input/pull/357) Bump ember-auto-import from 1.10.1 to 2.2.0 ([@dependabot[bot]](https://github.com/apps/dependabot))
- [#371](https://github.com/qonto/ember-phone-input/pull/371) Remove Node 10 & 11 from the package.json file ([@dcyriller](https://github.com/dcyriller))

#### :bug: Bug Fix

- [#415](https://github.com/qonto/ember-phone-input/pull/415) Add resilience for when scripts fail to load ([@zeppelin](https://github.com/zeppelin))
- [#371](https://github.com/qonto/ember-phone-input/pull/371) Remove Node 10 & 11 from the package.json file ([@dcyriller](https://github.com/dcyriller))

#### :memo: Documentation

- [#372](https://github.com/qonto/ember-phone-input/pull/372) Remove remaining hasPrepend documentation ([@ctjhoa](https://github.com/ctjhoa))

#### Committers: 3

- Camille TJHOA ([@ctjhoa](https://github.com/ctjhoa))
- Cyrille ([@dcyriller](https://github.com/dcyriller))
- Gabor Babicz ([@zeppelin](https://github.com/zeppelin))

## v.6.0.0 (2021-09-10)

#### :boom: Breaking Change

- [#362](https://github.com/qonto/ember-phone-input/pull/362) Drop support for ember@3.12 ([@dcyriller](https://github.com/dcyriller))
- [#351](https://github.com/qonto/ember-phone-input/pull/351) drop support for node 10 ([@mansona](https://github.com/mansona))
- [#348](https://github.com/qonto/ember-phone-input/pull/348) move to github ci and drop support for Ember 3.4 and 3.8 ([@mansona](https://github.com/mansona))

#### :memo: Documentation

- [#367](https://github.com/qonto/ember-phone-input/pull/367) fix(documentation): Set application-template-wrapper to true ([@dcyriller](https://github.com/dcyriller))

#### :bug: Bug Fix

- [#355](https://github.com/qonto/ember-phone-input/pull/355) updates element targeting to use this.element ([@jfdnc](https://github.com/jfdnc))

#### Committers: 4

- Chris Manson ([@mansona](https://github.com/mansona))
- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Philip Dudley ([@pdud](https://github.com/pdud))
- Jacob ([@jfdnc](https://github.com/jfdnc))

## v5.2.1 (2020-09-16)

#### :bug: Bug Fix

- [#255](https://github.com/qonto/ember-phone-input/pull/255) Add conditions to check if code typed in is valid ([@eliasmelgaco](https://github.com/eliasmelgaco))

#### Committers: 2

- Elias Melgaço ([@eliasmelgaco](https://github.com/eliasmelgaco))

## v5.2.0 (2020-08-05)

#### :rocket: Enhancement

- [#242](https://github.com/qonto/ember-phone-input/pull/242) Add numberFormat meta if number is valid ([@ctjhoa](https://github.com/ctjhoa))

#### Committers: 1

- Camille TJHOA ([@ctjhoa](https://github.com/ctjhoa))

## v5.1.0 (2020-07-16)

#### :house: Internal

- [#200](https://github.com/qonto/ember-phone-input/pull/200) Update ignore files ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement

- [#240](https://github.com/qonto/ember-phone-input/pull/240) Add binding for autocomplete ([@lan0](https://github.com/lan0))

#### Committers: 3

- Michael Pitzer ([@lan0](https://github.com/lan0))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v5.0.0 (2020-03-12)

#### :boom: Breaking Change

This main change in this release is updating intl-tel-input to a new major
version, which changes their CSS class names to use BEM. Since this might break
CSS overrides for a few people we decided to release this as a new major version
too.

- [#197](https://github.com/qonto/ember-phone-input/pull/197) Update intl-tel-input from 15.0.2 to 16.0.11

#### :house: Internal

- [#180](https://github.com/qonto/ember-phone-input/pull/180) 🔧 add Dependabot config.yml ([@dbendaou](https://github.com/dbendaou))

#### Committers: 2

- Djamel B. ([@dbendaou](https://github.com/dbendaou))

## v4.1.0 (2020-01-16)

#### :rocket: Enhancement

- [#178](https://github.com/qonto/ember-phone-input/pull/178) Make input field bind to required HTML attribute ([@samdemaeyer](https://github.com/samdemaeyer))

#### Committers: 2

- Sam De Maeyer ([@samdemaeyer](https://github.com/samdemaeyer))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v4.0.0 (2020-01-03)

#### :boom: Breaking Change

- [#177](https://github.com/qonto/ember-phone-input/pull/177) ð Drop node 8 support ([@dbendaou](https://github.com/dbendaou))

#### Committers: 2

- Djamel B. ([@dbendaou](https://github.com/dbendaou))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v3.1.2 (2019-11-29)

#### :bug: Bug Fix

- [#157](https://github.com/qonto/ember-phone-input/pull/157) Move script loading when `lazyLoad:false` ([@dcyriller](https://github.com/dcyriller))

#### Committers: 1

- Cyrille David ([@dcyriller](https://github.com/dcyriller))

## v3.1.1 (2019-11-28)

#### :bug: Bug Fix

- [#154](https://github.com/qonto/ember-phone-input/pull/154) Fix option lazyLoad: false ([@dcyriller](https://github.com/dcyriller))

#### Committers: 1

- Cyrille David ([@dcyriller](https://github.com/dcyriller))

## v3.1.0 (2019-11-27)

#### :rocket: Enhancement

- [#134](https://github.com/qonto/ember-phone-input/pull/134) [FEATURE] Add allowDropdown option ([@evanlouden](https://github.com/evanlouden))
- [#151](https://github.com/qonto/ember-phone-input/pull/151) Replace custom script loading code with `ember-auto-import` ([@Turbo87](https://github.com/Turbo87))
- [#144](https://github.com/qonto/ember-phone-input/pull/144) Feature add attribute biding for disabled ([@vsergiu93](https://github.com/vsergiu93))

#### :memo: Documentation

- [#148](https://github.com/qonto/ember-phone-input/pull/148) 📝 add pull request template ([@dbendaou](https://github.com/dbendaou))

#### :house: Internal

- [#153](https://github.com/qonto/ember-phone-input/pull/153) prettier: Set `semi: true` ([@Turbo87](https://github.com/Turbo87))
- [#152](https://github.com/qonto/ember-phone-input/pull/152) package.json: Move `babel-eslint` into `devDependencies` ([@Turbo87](https://github.com/Turbo87))
- [#150](https://github.com/qonto/ember-phone-input/pull/150) Remove obsolete `tough-cookie` resolution ([@Turbo87](https://github.com/Turbo87))
- [#145](https://github.com/qonto/ember-phone-input/pull/145) Remove ember-cli-htmlbars-inline-precompile to get rid of the deprecation warning while building ([@vsergiu93](https://github.com/vsergiu93))

#### Committers: 5

- Djamel B. ([@dbendaou](https://github.com/dbendaou))
- Evan Louden ([@evanlouden](https://github.com/evanlouden))
- Sergiu ([@vsergiu93](https://github.com/vsergiu93))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

## v3.0.0 (2019-09-23)

#### :boom: Breaking Change

- [#83](https://github.com/qonto/ember-phone-input/pull/83) Drop node 6 support ([@dcyriller](https://github.com/dcyriller))

#### :rocket: Enhancement

- [#123](https://github.com/qonto/ember-phone-input/pull/123) Feature: Add separateDialCode option ([@AleksandrBorovkov](https://github.com/AleksandrBorovkov))

#### :bug: Bug Fix

- [#84](https://github.com/qonto/ember-phone-input/pull/84) Upgrade ember-cli-favicon ([@dcyriller](https://github.com/dcyriller))

#### :house: Internal

- [#65](https://github.com/qonto/ember-phone-input/pull/65) Do not bind eventListener callback ([@dcyriller](https://github.com/dcyriller))

#### Committers: 3

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- [@AleksandrBorovkov](https://github.com/AleksandrBorovkov)

## v2.0.7 (2019-04-18)

#### :bug: Bug Fix

- [#61](https://github.com/qonto/ember-phone-input/pull/61) Make sure valid check updates when country changes ([@locks](https://github.com/locks))
- [#57](https://github.com/qonto/ember-phone-input/pull/57) Make sure correct path is used for intl-tel-input assets ([@danwenzel](https://github.com/danwenzel))

#### :memo: Documentation

- [#59](https://github.com/qonto/ember-phone-input/pull/59) Update import naming in the documentation ([@ctjhoa](https://github.com/ctjhoa))
- [#58](https://github.com/qonto/ember-phone-input/pull/58) Update README to add ember-observer score ([@dbendaou](https://github.com/dbendaou))

#### :house: Internal

- [#60](https://github.com/qonto/ember-phone-input/pull/60) Update testing scenarios ([@dcyriller](https://github.com/dcyriller))
- [#51](https://github.com/qonto/ember-phone-input/pull/51) Adjust eslint config / run prettier ([@dcyriller](https://github.com/dcyriller))
- [#36](https://github.com/qonto/ember-phone-input/pull/36) Add files to npmignore ([@dcyriller](https://github.com/dcyriller))

#### Committers: 5

- Camille TJHOA ([@ctjhoa](https://github.com/ctjhoa))
- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Dan Wenzel ([@danwenzel](https://github.com/danwenzel))
- Djamel B. ([@dbendaou](https://github.com/dbendaou))
- Ricardo Mendes ([@locks](https://github.com/locks))

## v2.0.6 (2019-02-18)

#### :bug: Bug Fix

- [#20](https://github.com/qonto/ember-phone-input/pull/20) Remove ember-decorators dependency ([@kiwiupover](https://github.com/kiwiupover))

#### :house: Internal

- [#30](https://github.com/qonto/ember-phone-input/pull/30) Build only master and tagged branches ([@dcyriller](https://github.com/dcyriller))

#### Committers: 2

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- David Laird ([@kiwiupover](https://github.com/kiwiupover))

## v2.0.5 (2019-02-04)

#### :bug: Bug Fix

- [#19](https://github.com/qonto/ember-phone-input/pull/19) Switch quote mark ([@jacojoubert](https://github.com/jacojoubert))

#### :house: Internal

- [#18](https://github.com/qonto/ember-phone-input/pull/18) Fix CI failing build ([@dcyriller](https://github.com/dcyriller))

#### Committers: 2

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- Jaco Joubert ([@jacojoubert](https://github.com/jacojoubert))

## v2.0.4 (2019-01-07)

#### :bug: Bug Fix

- [#16](https://github.com/qonto/ember-phone-input/pull/16) Fix a bug regarding vietnamese phone numbers ([@dcyriller](https://github.com/dcyriller))
- [#9](https://github.com/qonto/ember-phone-input/pull/9) Allow for prepended production assets ([@kiwiupover](https://github.com/kiwiupover))

#### Committers: 2

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
- David Laird ([@kiwiupover](https://github.com/kiwiupover))

## v2.0.3 (2018-12-22)

#### :bug: Bug Fix

- [#9](https://github.com/qonto/ember-phone-input/pull/9) Allow for prepended production assets ([@kiwiupover](https://github.com/kiwiupover))

#### Committers: 1

- David Laird ([@kiwiupover](https://github.com/kiwiupover))

## v2.0.2 (2018-12-20)

#### :house: Internal

- [#15](https://github.com/qonto/ember-phone-input/pull/15) Upgrade intl-tel-input from v14.0.3 to v14.0.6 ([@dcyriller](https://github.com/dcyriller))

#### Committers: 1

- Cyrille David ([@dcyriller](https://github.com/dcyriller))

## v2.0.1 (2018-12-20)

#### :bug: Bug Fix

- [#12](https://github.com/qonto/ember-phone-input/pull/12) Create a country attribute ([@dcyriller](https://github.com/dcyriller))

#### :house: Internal

- [#11](https://github.com/qonto/ember-phone-input/pull/11) Update .eslintrc.js ([@dcyriller](https://github.com/dcyriller))

#### Committers: 1

- Cyrille David ([@dcyriller](https://github.com/dcyriller))
