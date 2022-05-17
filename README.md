# I am your father
I am your father는 긴 XML 문서의 구문 분석을 통해 상위 Element를 알려주는 VS Code용 Extension입니다. 열린 문서에서 Element를 선택 시 상태바에 표시합니다.

## 사용법

VS Code에서 XML 문서를 열고 특정 Element를 선택(드래그 또는 더블클릭)하면 상태바에 표시됩니다.

추가로 해당 상태바를 더블 클릭하면 정보를 표시하는 다이얼로그가 표시됩니다.

## 제약사항

대상 파일은 모든 XML 문서를 지원하지 않습니다.

본 Extension은 단순히 XML 문서의 문자열 분석을 통해 상위 Element 정보를 검색하는 것이므로 목적에 맞게 변경하여 활용될 수 있습니다.

## VSCode Extension 만들기

### Node.js 설치

 - Node.js 프레임워크 설치합니다.

   - [https://node.js.org/](https://nodejs.org/ "Node.js official site")

### Yeoman generator 설치

 - Yeoman은 Microsoft에서 미리 만들어둔 Extension 생성기입니다. Yeoman generator를 설치합니다.

```bash
> npm install -g yo generator-code
```

### Yeoman 프로젝트 생성

 - yo code 명령어로 프로젝트를 생성합니다. Yeoman에 대한 사용법은 Microsoft가 제공하는 글을 참고합니다.

```bash
> yo code
```

 - 명령어 실행 후 질의 응답에 적절하게 답변하면 생성됩니다.

```bash
# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? No
# ? Which package manager to use? npm

# ? Do you want to open the new folder with Visual Studio Code? Open with `code`
```

### src/extension.ts 작성

 - Microsoft에 제공하는 vscode-extension-smaples를 참고하여 코드를 작성합니다.

 - Statusbar 사용 방법은 statusbar-sample을 참고하면 됩니다.

### 로컬 빌드

 - VSCE(Visual Studio Code Extensions) 설치합니다.

```bash
> npm install -g vsce
```

 - 패키지를 제작합니다.

```bash
> vsce package
```

### 마켓 등록

 - 마켓에 publish합니다.

```bash
> vsce publish
```

### Extension (VSIX file) 오프라인 설치

 - VS Code > Extensions 메뉴 > More actions(...) > Install from VSIX... 메뉴 선택
 - VSIX 파일 선택하여 설치

### Reference

 - [your-first-extension](https://code.visualstudio.com/api/get-started/your-first-extension)
 - [publishing-extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
 - [vscode-generator-code](https://github.com/microsoft/vscode-generator-code)
 - [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples)
