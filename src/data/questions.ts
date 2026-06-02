import type { InterviewQuestion } from '../types/question'

export const questions: InterviewQuestion[] = [
  {
    id: "ts-type-vs-interface",
    title: "TypeScript 中 type 和 interface 如何取舍",
    summary: "考察类型建模、扩展能力、声明合并和团队约定。",
    shortAnswer: "考察类型建模、扩展能力、声明合并和团队约定。",
    category: "typescript",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "type",
      "interface",
      "类型建模",
      "声明合并",
    ],
    interviewerFocus: [
      "是否知道二者都能描述对象结构",
      "是否理解 interface 的声明合并和 extends",
      "是否能说明联合类型、工具类型等场景更适合 type",
    ],
    answer: "type 和 interface 都可以描述对象结构。interface 更适合公开对象契约和可扩展 API，因为它支持 extends 和声明合并；type 更灵活，适合联合类型、交叉类型、条件类型、工具类型组合等表达。实际项目里我会优先遵守团队约定：对外对象模型常用 interface，复杂类型组合和字面量联合更常用 type，关键是保持一致和可读。",
    oralAnswer: "type 和 interface 都可以描述对象结构。interface 更适合公开对象契约和可扩展 API，因为它支持 extends 和声明合并；type 更灵活，适合联合类型、交叉类型、条件类型、工具类型组合等表达。实际项目里我会优先遵守团队约定：对外对象模型常用 interface，复杂类型组合和字面量联合更常用 type，关键是保持一致和可读。",
    keyPoints: [
      "interface 适合对象契约",
      "type 适合复杂类型表达",
      "团队一致性比个人偏好更重要",
    ],
    followUps: [
      {
        question: "interface 能不能表达联合类型？",
        answerHint: "不能直接表达联合类型，这类场景通常使用 type。",
      },
      {
        question: "项目里如何统一 type 和 interface 的使用规范？",
        answerHint: "可以把对象契约、联合类型、工具类型等场景写进团队规范，并通过 code review 保持一致。",
      },
    ],
  },
  {
    id: "react-render-performance",
    title: "React 应用中如何定位和优化不必要渲染",
    summary: "考察渲染原因分析、状态边界、memo 和 Profiler 的使用。",
    shortAnswer: "考察渲染原因分析、状态边界、memo 和 Profiler 的使用。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React",
      "性能优化",
      "memo",
      "Profiler",
    ],
    interviewerFocus: [
      "是否先定位问题而不是盲目 memo",
      "是否理解 props、state、context 变化会触发渲染",
      "是否能从状态下沉、组件拆分和引用稳定性角度优化",
    ],
    answer: "我会先用 React DevTools Profiler 或日志定位哪些组件在频繁渲染以及渲染成本。常见优化包括缩小状态影响范围，避免把高频变化放在过大的父组件或全局 context；对稳定输入的重组件使用 React.memo；用 useMemo、useCallback 保持传给子组件的对象和函数引用稳定；必要时拆分组件，让真正变化的部分独立渲染。优化前后都要用 Profiler 对比，避免为了 memo 增加复杂度。",
    oralAnswer: "我会先用 React DevTools Profiler 或日志定位哪些组件在频繁渲染以及渲染成本。常见优化包括缩小状态影响范围，避免把高频变化放在过大的父组件或全局 context；对稳定输入的重组件使用 React.memo；用 useMemo、useCallback 保持传给子组件的对象和函数引用稳定；必要时拆分组件，让真正变化的部分独立渲染。优化前后都要用 Profiler 对比，避免为了 memo 增加复杂度。",
    keyPoints: [
      "先定位渲染来源",
      "缩小状态影响范围",
      "memo 和缓存需要度量验证",
    ],
    followUps: [
      {
        question: "useCallback 一定能提升性能吗？",
        answerHint: "不一定，它也有维护成本，主要用于稳定引用或避免重组件重复渲染。",
      },
      {
        question: "什么时候不应该使用 React.memo？",
        answerHint: "组件本身很轻、props 每次都变化或比较成本高于渲染成本时，memo 反而会增加复杂度。",
      },
    ],
    relatedQuestionIds: [
      "performance-core-web-vitals",
      "react-concurrent-rendering",
    ],
  },
  {
    id: "browser-render-pipeline",
    title: "浏览器从输入 URL 到页面渲染经历了什么",
    summary: "覆盖网络请求、HTML 解析、CSSOM、渲染树、布局和绘制。",
    shortAnswer: "覆盖网络请求、HTML 解析、CSSOM、渲染树、布局和绘制。",
    category: "browser",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "浏览器渲染",
      "DOM",
      "CSSOM",
      "关键渲染路径",
    ],
    interviewerFocus: [
      "是否能串起网络和渲染主链路",
      "是否理解 DOM、CSSOM、渲染树、布局、绘制的关系",
      "是否知道阻塞渲染资源和性能优化切入点",
    ],
    answer: "输入 URL 后，浏览器会进行缓存检查、DNS 解析、建立连接并发起请求。拿到 HTML 后开始解析生成 DOM，遇到 CSS 生成 CSSOM，二者结合形成渲染树，再进行布局、绘制和合成。JavaScript 可能阻塞 HTML 解析，CSS 会影响渲染树生成，所以关键 CSS、脚本加载策略、资源优先级和缓存都会影响首屏速度。",
    oralAnswer: "输入 URL 后，浏览器会进行缓存检查、DNS 解析、建立连接并发起请求。拿到 HTML 后开始解析生成 DOM，遇到 CSS 生成 CSSOM，二者结合形成渲染树，再进行布局、绘制和合成。JavaScript 可能阻塞 HTML 解析，CSS 会影响渲染树生成，所以关键 CSS、脚本加载策略、资源优先级和缓存都会影响首屏速度。",
    keyPoints: [
      "网络请求和缓存先发生",
      "DOM 与 CSSOM 共同形成渲染树",
      "脚本和样式会影响首屏",
    ],
    followUps: [
      {
        question: "defer 和 async 的脚本加载差异是什么？",
        answerHint: "async 下载完成后尽快执行，defer 等 HTML 解析完成后按顺序执行。",
      },
      {
        question: "哪些资源会阻塞首屏渲染？",
        answerHint: "关键 CSS、同步脚本、大图片和慢接口都可能影响首屏，需要结合优先级和加载策略优化。",
      },
    ],
    relatedQuestionIds: [
      "performance-core-web-vitals",
    ],
  },
  {
    id: "engineering-vite-build",
    title: "Vite 相比传统打包工具的核心优势是什么",
    summary: "考察开发期原生 ESM、预构建、生产构建和工程化取舍。",
    shortAnswer: "考察开发期原生 ESM、预构建、生产构建和工程化取舍。",
    category: "engineering",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "Vite",
      "工程化",
      "ESM",
      "Rollup",
    ],
    interviewerFocus: [
      "是否理解开发期不整体打包的原因",
      "是否知道依赖预构建的作用",
      "是否能说明开发构建和生产构建的差异",
    ],
    answer: "Vite 的核心优势在开发期利用浏览器原生 ESM，按需转换源码模块，避免每次启动都做完整打包，所以冷启动和热更新更快。第三方依赖会先用 esbuild 预构建，减少请求数量并处理 CommonJS 兼容。生产环境仍然使用 Rollup 做打包、拆分和优化，因此它不是不要打包，而是把开发期和生产期的策略分开。",
    oralAnswer: "Vite 的核心优势在开发期利用浏览器原生 ESM，按需转换源码模块，避免每次启动都做完整打包，所以冷启动和热更新更快。第三方依赖会先用 esbuild 预构建，减少请求数量并处理 CommonJS 兼容。生产环境仍然使用 Rollup 做打包、拆分和优化，因此它不是不要打包，而是把开发期和生产期的策略分开。",
    keyPoints: [
      "开发期使用原生 ESM",
      "esbuild 负责依赖预构建",
      "生产构建仍使用 Rollup",
    ],
    followUps: [
      {
        question: "为什么依赖需要预构建？",
        answerHint: "减少浏览器请求数量，并把 CommonJS 等格式转换成 ESM。",
      },
      {
        question: "Vite 生产构建为什么还需要打包？",
        answerHint: "生产环境需要代码分割、压缩、tree shaking、缓存友好的产物组织和兼容性处理。",
      },
    ],
  },
  {
    id: "performance-core-web-vitals",
    title: "如何理解和优化 Core Web Vitals",
    summary: "考察 LCP、INP、CLS 指标含义和可落地优化方向。",
    shortAnswer: "考察 LCP、INP、CLS 指标含义和可落地优化方向。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "性能优化",
      "LCP",
      "INP",
      "CLS",
    ],
    interviewerFocus: [
      "是否能解释核心指标代表的用户体验",
      "是否能给出具体优化动作",
      "是否知道实验室数据和真实用户数据的差异",
    ],
    answer: "Core Web Vitals 关注真实用户体验。LCP 衡量最大内容的加载速度，可以通过优化服务端响应、关键资源、图片和渲染阻塞资源改善；INP 衡量交互响应，需要减少主线程长任务、降低 JS 执行成本；CLS 衡量视觉稳定性，要为图片、广告和异步内容预留尺寸。优化时要结合真实用户监控和 Lighthouse 等实验室工具，先抓影响最大的页面和资源。",
    oralAnswer: "Core Web Vitals 关注真实用户体验。LCP 衡量最大内容的加载速度，可以通过优化服务端响应、关键资源、图片和渲染阻塞资源改善；INP 衡量交互响应，需要减少主线程长任务、降低 JS 执行成本；CLS 衡量视觉稳定性，要为图片、广告和异步内容预留尺寸。优化时要结合真实用户监控和 Lighthouse 等实验室工具，先抓影响最大的页面和资源。",
    keyPoints: [
      "LCP 关注加载",
      "INP 关注交互响应",
      "CLS 关注布局稳定",
    ],
    followUps: [
      {
        question: "为什么只看 Lighthouse 分数不够？",
        answerHint: "实验室环境有限，真实用户设备、网络和页面路径会更复杂。",
      },
      {
        question: "线上性能优化应该先看实验室数据还是真实用户数据？",
        answerHint: "真实用户数据更能代表影响面，实验室数据适合复现和验证具体优化动作。",
      },
    ],
    relatedQuestionIds: [
      "react-render-performance",
      "browser-render-pipeline",
    ],
  },
  {
    id: "react-concurrent-rendering",
    title: "React 并发渲染解决了什么问题",
    summary: "考察可中断渲染、优先级、用户交互响应和心智模型。",
    shortAnswer: "考察可中断渲染、优先级、用户交互响应和心智模型。",
    category: "react",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "React 18",
      "并发渲染",
      "调度",
      "交互体验",
    ],
    interviewerFocus: [
      "是否理解并发渲染不是多线程渲染 DOM",
      "是否知道渲染可以被中断和重新开始",
      "是否能结合 startTransition 说明优先级",
    ],
    answer: "React 并发渲染主要解决大更新阻塞交互的问题。它让渲染工作可以被拆分、暂停、丢弃或重新开始，从而让更高优先级的用户输入先响应。它不是把 DOM 渲染变成多线程，而是在 React 的渲染阶段引入调度能力。像 startTransition 可以把非紧急更新标记为低优先级，让输入等紧急更新保持流畅。",
    oralAnswer: "React 并发渲染主要解决大更新阻塞交互的问题。它让渲染工作可以被拆分、暂停、丢弃或重新开始，从而让更高优先级的用户输入先响应。它不是把 DOM 渲染变成多线程，而是在 React 的渲染阶段引入调度能力。像 startTransition 可以把非紧急更新标记为低优先级，让输入等紧急更新保持流畅。",
    keyPoints: [
      "并发渲染强调可中断和调度",
      "不是 DOM 多线程渲染",
      "startTransition 用于标记非紧急更新",
    ],
    followUps: [
      {
        question: "并发渲染会不会改变组件副作用写法？",
        answerHint: "渲染阶段应保持纯净，副作用放到 effect 中，避免依赖渲染只执行一次。",
      },
      {
        question: "并发渲染下为什么 render 阶段必须保持纯净？",
        answerHint: "render 可能被中断、重试或丢弃，如果在 render 里产生副作用，会导致不可预测的重复执行。",
      },
    ],
    relatedQuestionIds: [
      "react-render-performance",
    ],
  },
  {
    id: "ai-coding-spec-workflow",
    title: "AI Coding 项目中为什么要先写 Spec",
    summary: "考察需求约束、验收标准、任务拆分和 AI 协作方式。",
    shortAnswer: "考察需求约束、验收标准、任务拆分和 AI 协作方式。",
    category: "ai-coding",
    difficulty: "basic",
    frequency: "medium",
    tags: [
      "AI Coding",
      "Spec",
      "任务拆分",
      "验收",
    ],
    interviewerFocus: [
      "是否理解 Spec 能减少实现偏差",
      "是否能把产品、技术、数据和 UI 约束拆开",
      "是否知道用验收清单控制交付边界",
    ],
    answer: "AI Coding 先写 Spec 的价值是把目标、范围和验收标准前置，减少模型自由发挥导致的偏差。产品规格说明做什么和不做什么，技术规格约束栈和架构，数据规格稳定模型，UI 规格明确交互和层级。再把任务拆成可验证的小阶段，每次只实现当前阶段，就能让 AI 输出更可控，也方便人工 review 和回滚。",
    oralAnswer: "AI Coding 先写 Spec 的价值是把目标、范围和验收标准前置，减少模型自由发挥导致的偏差。产品规格说明做什么和不做什么，技术规格约束栈和架构，数据规格稳定模型，UI 规格明确交互和层级。再把任务拆成可验证的小阶段，每次只实现当前阶段，就能让 AI 输出更可控，也方便人工 review 和回滚。",
    keyPoints: [
      "Spec 明确范围",
      "任务拆分降低实现风险",
      "验收清单让交付可检查",
    ],
    followUps: [
      {
        question: "Spec 写得越细越好吗？",
        answerHint: "不是，要覆盖关键约束和验收点，同时给实现保留合理空间。",
      },
      {
        question: "AI Coding 的 Spec 应该包含哪些验收信息？",
        answerHint: "至少包含 MVP 范围、技术边界、数据结构、页面行为、禁止事项和可执行的验收命令。",
      },
    ],
  },
  {
    id: "react-fiber-render-scheduling",
    title: "React Fiber 如何支撑可中断渲染和优先级调度",
    summary: "考察 Fiber 数据结构、任务拆分、优先级和渲染可中断能力。",
    shortAnswer: "考察 Fiber 数据结构、任务拆分、优先级和渲染可中断能力。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React Fiber",
      "调度",
      "可中断渲染",
      "优先级",
    ],
    interviewerFocus: [
      "是否理解 Fiber 既是数据结构也是工作单元",
      "是否能说明 render 阶段为什么可以被中断",
      "是否知道优先级调度如何改善交互响应",
    ],
    answer: "我会把 Fiber 理解成 React 为每个组件建立的可恢复工作单元。旧的递归渲染一旦开始就很难暂停，而 Fiber 把组件树的计算拆成一个个节点，React 可以在 render 阶段根据优先级暂停、丢弃或重新开始工作。这样用户输入、动画这类高优先级更新能先得到响应，低优先级的大列表或页面切换可以稍后完成。需要注意的是，可中断主要发生在 render 阶段，真正修改 DOM 的 commit 阶段仍然要保持同步和一致，避免用户看到半完成状态。",
    oralAnswer: "我会把 Fiber 理解成 React 为每个组件建立的可恢复工作单元。旧的递归渲染一旦开始就很难暂停，而 Fiber 把组件树的计算拆成一个个节点，React 可以在 render 阶段根据优先级暂停、丢弃或重新开始工作。这样用户输入、动画这类高优先级更新能先得到响应，低优先级的大列表或页面切换可以稍后完成。需要注意的是，可中断主要发生在 render 阶段，真正修改 DOM 的 commit 阶段仍然要保持同步和一致，避免用户看到半完成状态。",
    keyPoints: [
      "Fiber 是可恢复工作单元",
      "render 阶段可中断",
      "commit 阶段保持同步提交",
      "优先级调度改善交互响应",
    ],
    followUps: [
      {
        question: "Fiber 和虚拟 DOM 是一回事吗？",
        answerHint: "不是。虚拟 DOM 描述 UI 结果，Fiber 还保存调度、状态和副作用链路等工作信息。",
      },
      {
        question: "为什么 commit 阶段不适合被中断？",
        answerHint: "commit 会产生真实 DOM 变更和副作用，中断会造成 UI 与状态不一致。",
      },
    ],
    relatedQuestionIds: [
      "react-concurrent-rendering",
      "react-render-performance",
    ],
  },
  {
    id: "react-render-commit-difference",
    title: "React 的 render 阶段和 commit 阶段有什么区别",
    summary: "考察渲染计算、副作用收集、DOM 提交和生命周期执行时机。",
    shortAnswer: "考察渲染计算、副作用收集、DOM 提交和生命周期执行时机。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "render",
      "commit",
      "副作用",
      "生命周期",
    ],
    interviewerFocus: [
      "是否能区分计算阶段和提交阶段",
      "是否知道 render 阶段应保持纯净",
      "是否理解 effect 和 DOM 更新发生在 commit 相关阶段",
    ],
    answer: "render 阶段主要做计算：从根节点开始生成或更新 Fiber 树，比较新旧节点，决定需要插入、更新或删除哪些内容。这个阶段应该是纯的，不应该读写 DOM 或发请求，因为它可能被中断、重试甚至丢弃。commit 阶段才会把计算结果一次性提交到宿主环境，比如更新 DOM、设置 ref、触发布局相关生命周期和 effect。面试里我通常会强调，性能分析时要先看 render 成本还是 commit 成本：前者更多和状态边界、memo、组件拆分有关，后者更多和 DOM 规模、布局、同步副作用有关。",
    oralAnswer: "render 阶段主要做计算：从根节点开始生成或更新 Fiber 树，比较新旧节点，决定需要插入、更新或删除哪些内容。这个阶段应该是纯的，不应该读写 DOM 或发请求，因为它可能被中断、重试甚至丢弃。commit 阶段才会把计算结果一次性提交到宿主环境，比如更新 DOM、设置 ref、触发布局相关生命周期和 effect。面试里我通常会强调，性能分析时要先看 render 成本还是 commit 成本：前者更多和状态边界、memo、组件拆分有关，后者更多和 DOM 规模、布局、同步副作用有关。",
    keyPoints: [
      "render 负责计算差异",
      "render 应保持纯净",
      "commit 负责真实提交",
      "性能排查要区分阶段",
    ],
    followUps: [
      {
        question: "为什么不能在 render 里直接发请求？",
        answerHint: "render 可能重复执行或被丢弃，副作用会不可控，应放到 effect 或框架数据层。",
      },
      {
        question: "useLayoutEffect 和 useEffect 与 commit 有什么关系？",
        answerHint: "useLayoutEffect 更靠近 DOM 提交后的同步读写，useEffect 通常在绘制后异步执行。",
      },
    ],
    relatedQuestionIds: [
      "react-fiber-render-scheduling",
    ],
  },
  {
    id: "react-automatic-batching",
    title: "React 自动批处理如何影响多次 setState 的执行结果",
    summary: "考察批处理范围、状态快照、函数式更新和异步场景。",
    shortAnswer: "考察批处理范围、状态快照、函数式更新和异步场景。",
    category: "react",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "自动批处理",
      "setState",
      "状态快照",
      "函数式更新",
    ],
    interviewerFocus: [
      "是否理解批处理减少重复渲染",
      "是否知道状态读取存在快照语义",
      "是否能说明函数式更新的必要性",
    ],
    answer: "自动批处理的核心是把同一批上下文里的多次状态更新合并成一次渲染，减少重复计算和 DOM 提交。在 React 18 之后，批处理不只发生在 React 事件里，Promise、setTimeout、原生事件等异步场景也会被更一致地处理。需要注意，状态变量在一次 render 中像快照，多次写 setCount(count + 1) 可能读到同一个旧值；如果下一次状态依赖上一次状态，应该使用函数式更新 setCount(c => c + 1)。批处理优化的是渲染次数，不代表状态会立即同步变成新值。",
    oralAnswer: "自动批处理的核心是把同一批上下文里的多次状态更新合并成一次渲染，减少重复计算和 DOM 提交。在 React 18 之后，批处理不只发生在 React 事件里，Promise、setTimeout、原生事件等异步场景也会被更一致地处理。需要注意，状态变量在一次 render 中像快照，多次写 setCount(count + 1) 可能读到同一个旧值；如果下一次状态依赖上一次状态，应该使用函数式更新 setCount(c => c + 1)。批处理优化的是渲染次数，不代表状态会立即同步变成新值。",
    keyPoints: [
      "批处理减少重复渲染",
      "异步场景也会批处理",
      "状态读取有快照语义",
      "依赖旧值时用函数式更新",
    ],
    followUps: [
      {
        question: "什么时候需要 flushSync？",
        answerHint: "只有必须立刻读取更新后的 DOM 或与第三方命令式逻辑同步时才考虑，不能滥用。",
      },
      {
        question: "批处理会不会改变 useEffect 的执行次数？",
        answerHint: "它可能减少渲染和提交次数，从而减少对应 effect 的触发，但不改变依赖语义。",
      },
    ],
    relatedQuestionIds: [
      "react-render-commit-difference",
    ],
  },
  {
    id: "react-usetransition-priority",
    title: "useTransition 如何区分紧急更新和非紧急更新",
    summary: "考察交互优先级、pending 状态、列表过滤和页面切换体验。",
    shortAnswer: "考察交互优先级、pending 状态、列表过滤和页面切换体验。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "useTransition",
      "并发渲染",
      "优先级",
      "pending",
    ],
    interviewerFocus: [
      "是否知道哪些更新属于紧急交互",
      "是否能用 startTransition 包裹低优先级更新",
      "是否理解 pending 只是过渡状态反馈",
    ],
    answer: "useTransition 适合把不影响输入即时反馈的更新标记为非紧急，比如搜索框输入要马上显示，但大列表过滤结果可以稍后更新。写法上，输入值本身通常保持普通 state，让用户输入不被阻塞；昂贵的筛选、路由切换或图表刷新放进 startTransition。React 可以在有更高优先级输入时暂停或放弃这部分渲染，等空闲时再完成。isPending 用来给用户一个轻量反馈，比如显示更新中，但它不是请求 loading，也不应该替代数据请求状态。",
    oralAnswer: "useTransition 适合把不影响输入即时反馈的更新标记为非紧急，比如搜索框输入要马上显示，但大列表过滤结果可以稍后更新。写法上，输入值本身通常保持普通 state，让用户输入不被阻塞；昂贵的筛选、路由切换或图表刷新放进 startTransition。React 可以在有更高优先级输入时暂停或放弃这部分渲染，等空闲时再完成。isPending 用来给用户一个轻量反馈，比如显示更新中，但它不是请求 loading，也不应该替代数据请求状态。",
    keyPoints: [
      "输入反馈属于紧急更新",
      "昂贵 UI 更新可放进 transition",
      "isPending 表示过渡渲染中",
      "不能替代请求 loading",
    ],
    followUps: [
      {
        question: "useTransition 和 debounce 有什么区别？",
        answerHint: "debounce 推迟触发更新，transition 触发更新但降低渲染优先级。",
      },
      {
        question: "startTransition 里的请求会自动变低优先级吗？",
        answerHint: "它主要标记 React 状态更新优先级，请求本身仍需要数据层管理。",
      },
    ],
    relatedQuestionIds: [
      "react-concurrent-rendering",
      "react-fiber-render-scheduling",
    ],
  },
  {
    id: "react-suspense-boundary-design",
    title: "Suspense 边界在数据请求和代码分割中如何设计",
    summary: "考察 fallback 粒度、嵌套边界、错误处理和用户体验。",
    shortAnswer: "考察 fallback 粒度、嵌套边界、错误处理和用户体验。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Suspense",
      "fallback",
      "代码分割",
      "数据请求",
    ],
    interviewerFocus: [
      "是否理解 Suspense 是声明式等待边界",
      "是否能设计合理的 fallback 粒度",
      "是否知道 Suspense 不等于 Error Boundary",
    ],
    answer: "Suspense 可以把某块 UI 的“等待状态”声明在组件树里，常见场景是代码分割和支持 Suspense 的数据读取。边界设计要看用户感知：页面骨架可以放大一点的边界，局部 tab、详情面板或评论列表更适合细粒度边界，避免一个小模块加载导致整页闪烁。多个异步区域可以嵌套边界，让关键内容先出现，次要内容渐进展示。同时要和 Error Boundary 配合，Suspense 处理等待，Error Boundary 处理失败；fallback 也要稳定尺寸，避免引发 CLS。",
    oralAnswer: "Suspense 可以把某块 UI 的“等待状态”声明在组件树里，常见场景是代码分割和支持 Suspense 的数据读取。边界设计要看用户感知：页面骨架可以放大一点的边界，局部 tab、详情面板或评论列表更适合细粒度边界，避免一个小模块加载导致整页闪烁。多个异步区域可以嵌套边界，让关键内容先出现，次要内容渐进展示。同时要和 Error Boundary 配合，Suspense 处理等待，Error Boundary 处理失败；fallback 也要稳定尺寸，避免引发 CLS。",
    keyPoints: [
      "Suspense 处理等待状态",
      "边界粒度影响体验",
      "可嵌套实现渐进展示",
      "失败要交给 Error Boundary",
    ],
    followUps: [
      {
        question: "Suspense fallback 为什么不宜过大？",
        answerHint: "过大边界会让无关内容一起消失，造成闪烁和上下文丢失。",
      },
      {
        question: "Suspense 能直接捕获请求错误吗？",
        answerHint: "错误需要 Error Boundary 或数据层处理，Suspense 本身关注等待。",
      },
    ],
    relatedQuestionIds: [
      "react-error-boundary-recovery",
    ],
  },
  {
    id: "react-error-boundary-recovery",
    title: "Error Boundary 如何设计降级和恢复流程",
    summary: "考察错误捕获范围、fallback UI、重试恢复和监控上报。",
    shortAnswer: "考察错误捕获范围、fallback UI、重试恢复和监控上报。",
    category: "react",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Error Boundary",
      "错误恢复",
      "fallback",
      "监控",
    ],
    interviewerFocus: [
      "是否知道 Error Boundary 捕获渲染阶段错误",
      "是否能设计局部降级而不是整页白屏",
      "是否考虑错误上报和重试恢复",
    ],
    answer: "Error Boundary 主要捕获子组件渲染、生命周期和构造过程中的错误，避免一个局部异常把整棵应用打白。设计时我会按业务区域放边界，比如路由级、面板级或低可信组件级，fallback 要能告诉用户发生了什么，并提供刷新、重试或返回入口。它不能捕获事件处理器、异步回调和服务端错误，这些要在对应逻辑里 try/catch 或通过请求层处理。生产环境还要把错误、组件栈、用户操作上下文上报到监控系统，方便定位和恢复。",
    oralAnswer: "Error Boundary 主要捕获子组件渲染、生命周期和构造过程中的错误，避免一个局部异常把整棵应用打白。设计时我会按业务区域放边界，比如路由级、面板级或低可信组件级，fallback 要能告诉用户发生了什么，并提供刷新、重试或返回入口。它不能捕获事件处理器、异步回调和服务端错误，这些要在对应逻辑里 try/catch 或通过请求层处理。生产环境还要把错误、组件栈、用户操作上下文上报到监控系统，方便定位和恢复。",
    keyPoints: [
      "捕获渲染相关错误",
      "边界应尽量局部化",
      "事件和异步错误需单独处理",
      "需要上报和重试机制",
    ],
    followUps: [
      {
        question: "为什么 Error Boundary 不能捕获点击事件里的错误？",
        answerHint: "点击事件不属于渲染提交流程，应该在事件处理器中自行捕获。",
      },
      {
        question: "Error Boundary 应该放在多高的位置？",
        answerHint: "既要避免整页白屏，也不能细到维护成本过高，通常路由和关键业务块各放一层。",
      },
    ],
    relatedQuestionIds: [
      "react-suspense-boundary-design",
    ],
  },
  {
    id: "react-memo-invalid-cases",
    title: "React.memo 为什么有时会失效",
    summary: "考察浅比较、引用稳定性、children、context 和过度 memo。",
    shortAnswer: "考察浅比较、引用稳定性、children、context 和过度 memo。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React.memo",
      "浅比较",
      "引用稳定性",
      "context",
    ],
    interviewerFocus: [
      "是否知道 memo 默认做 props 浅比较",
      "是否理解对象、函数和 children 引用变化",
      "是否能说明 context 更新会绕过 props memo",
    ],
    answer: "React.memo 不是让组件永远不渲染，它只是当父组件渲染时，对 props 做一次浅比较。如果每次都传新的对象、数组、函数或 JSX children，浅比较就会认为变了，memo 自然挡不住。另一个常见点是 context：组件读取的 context 变化时，即使 props 没变也会重新渲染。所以优化时我会先用 Profiler 确认重渲染成本，再稳定必要引用、拆分 context、把高频状态下沉到更小范围。盲目 memo 反而增加比较成本和代码复杂度。",
    oralAnswer: "React.memo 不是让组件永远不渲染，它只是当父组件渲染时，对 props 做一次浅比较。如果每次都传新的对象、数组、函数或 JSX children，浅比较就会认为变了，memo 自然挡不住。另一个常见点是 context：组件读取的 context 变化时，即使 props 没变也会重新渲染。所以优化时我会先用 Profiler 确认重渲染成本，再稳定必要引用、拆分 context、把高频状态下沉到更小范围。盲目 memo 反而增加比较成本和代码复杂度。",
    keyPoints: [
      "memo 默认浅比较 props",
      "新引用会让 memo 失效",
      "context 变化仍会触发渲染",
      "先度量再优化",
    ],
    followUps: [
      {
        question: "自定义 areEqual 是否推荐大量使用？",
        answerHint: "不推荐。复杂比较可能比渲染更贵，且容易漏字段造成 UI 旧数据。",
      },
      {
        question: "children 为什么可能让 memo 失效？",
        answerHint: "JSX 本质也是对象，每次重新创建的 children 引用会变化。",
      },
    ],
    relatedQuestionIds: [
      "react-render-performance",
    ],
  },
  {
    id: "react-key-design-state-reuse",
    title: "React 列表和条件渲染中 key 应该如何设计",
    summary: "考察 key 与状态复用、列表重排、表单错位和组件重置。",
    shortAnswer: "考察 key 与状态复用、列表重排、表单错位和组件重置。",
    category: "react",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "key",
      "状态复用",
      "列表渲染",
      "reconcile",
    ],
    interviewerFocus: [
      "是否理解 key 用于兄弟节点身份识别",
      "是否知道 index key 在重排时的风险",
      "是否能利用 key 主动重置组件状态",
    ],
    answer: "key 的作用是帮助 React 在同一层兄弟节点中识别“谁是谁”，从而决定复用还是重新创建组件。稳定的业务 id 通常是最佳选择，因为插入、删除和重排时组件状态能跟着数据走。用 index 当 key 在静态列表里问题不大，但只要列表会排序、过滤或插入，就可能导致输入框值、动画状态或内部 state 错位。另一方面，key 也可以主动用于重置组件，比如切换用户详情时给表单容器一个 userId key，让旧表单状态被丢弃。",
    oralAnswer: "key 的作用是帮助 React 在同一层兄弟节点中识别“谁是谁”，从而决定复用还是重新创建组件。稳定的业务 id 通常是最佳选择，因为插入、删除和重排时组件状态能跟着数据走。用 index 当 key 在静态列表里问题不大，但只要列表会排序、过滤或插入，就可能导致输入框值、动画状态或内部 state 错位。另一方面，key 也可以主动用于重置组件，比如切换用户详情时给表单容器一个 userId key，让旧表单状态被丢弃。",
    keyPoints: [
      "key 标识同层节点身份",
      "优先使用稳定业务 id",
      "index key 在动态列表有风险",
      "改变 key 可主动重置状态",
    ],
    followUps: [
      {
        question: "key 是否需要全局唯一？",
        answerHint: "不需要，只需要在同一层兄弟节点之间唯一稳定。",
      },
      {
        question: "为什么删除第一项时 index key 容易错位？",
        answerHint: "后续节点 index 全部变化，React 会错误复用旧位置的组件状态。",
      },
    ],
    relatedQuestionIds: [
      "react-render-commit-difference",
    ],
  },
  {
    id: "react-activity-state-preservation",
    title: "React 19.2 Activity 适合解决什么 UI 状态保留问题",
    summary: "考察隐藏视图保活、状态保留、副作用清理和使用边界。",
    shortAnswer: "考察隐藏视图保活、状态保留、副作用清理和使用边界。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React 19.2",
      "Activity",
      "状态保留",
      "隐藏视图",
    ],
    interviewerFocus: [
      "是否知道 Activity 可在隐藏时保留 UI 状态",
      "是否理解 hidden 模式下 effect 会被清理",
      "是否能区分保活和条件卸载的取舍",
    ],
    answer: "Activity 更适合“暂时隐藏但希望保留状态”的 UI，比如 tab 切换、侧边面板、返回上一页时保留表单输入等。传统条件渲染会卸载组件，内部 state 和 DOM 状态都丢掉；Activity 的 hidden 模式可以隐藏 UI 并保留状态，重新 visible 时恢复得更自然。不过它不是无限保活工具，隐藏后相关 effect 会被清理，避免后台订阅或定时器继续跑。使用时要评估内存成本和业务语义：如果内容应该彻底重置，就不该用 Activity 保留。",
    oralAnswer: "Activity 更适合“暂时隐藏但希望保留状态”的 UI，比如 tab 切换、侧边面板、返回上一页时保留表单输入等。传统条件渲染会卸载组件，内部 state 和 DOM 状态都丢掉；Activity 的 hidden 模式可以隐藏 UI 并保留状态，重新 visible 时恢复得更自然。不过它不是无限保活工具，隐藏后相关 effect 会被清理，避免后台订阅或定时器继续跑。使用时要评估内存成本和业务语义：如果内容应该彻底重置，就不该用 Activity 保留。",
    keyPoints: [
      "适合隐藏但保留状态的 UI",
      "hidden 与 visible 表达可见性",
      "隐藏时会清理 effect",
      "需要评估内存和重置语义",
    ],
    followUps: [
      {
        question: "Activity 和 display: none 有什么不同？",
        answerHint: "display 只影响样式，Activity 还参与 React 对状态和 effect 生命周期的管理。",
      },
      {
        question: "Activity 能替代路由缓存方案吗？",
        answerHint: "不能直接等同，复杂路由缓存还要考虑数据刷新、内存上限和返回策略。",
      },
    ],
    relatedQuestionIds: [
      "react-useeffect-cleanup-abuse",
    ],
  },
  {
    id: "react-useeffectevent-dependency",
    title: "useEffectEvent 解决了 useEffect 中哪些依赖问题",
    summary: "考察 Effect Event、闭包、依赖数组和非响应式逻辑拆分。",
    shortAnswer: "考察 Effect Event、闭包、依赖数组和非响应式逻辑拆分。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "useEffectEvent",
      "useEffect",
      "闭包",
      "依赖数组",
    ],
    interviewerFocus: [
      "是否能区分响应式依赖和非响应式事件逻辑",
      "是否知道 useEffectEvent 能读取最新 props/state",
      "是否避免把它当作逃避依赖检查的工具",
    ],
    answer: "useEffectEvent 主要解决 effect 里混杂了响应式同步逻辑和非响应式事件逻辑的问题。比如连接聊天室需要依赖 roomId 重新连接，但连接成功后展示通知时想读取最新主题色，不希望主题色变化导致重新连接。Effect Event 可以把这段“事件式逻辑”抽出来，它在调用时能读到最新 props 和 state，但不会作为 effect 的响应式依赖触发重跑。关键是不要把它当成绕过依赖数组的万能工具：真正影响同步关系的值仍然必须放进依赖。",
    oralAnswer: "useEffectEvent 主要解决 effect 里混杂了响应式同步逻辑和非响应式事件逻辑的问题。比如连接聊天室需要依赖 roomId 重新连接，但连接成功后展示通知时想读取最新主题色，不希望主题色变化导致重新连接。Effect Event 可以把这段“事件式逻辑”抽出来，它在调用时能读到最新 props 和 state，但不会作为 effect 的响应式依赖触发重跑。关键是不要把它当成绕过依赖数组的万能工具：真正影响同步关系的值仍然必须放进依赖。",
    keyPoints: [
      "拆分响应式和非响应式逻辑",
      "可读取最新状态",
      "不触发 effect 重新执行",
      "不能逃避真实依赖",
    ],
    followUps: [
      {
        question: "useEffectEvent 可以在点击事件里调用吗？",
        answerHint: "它设计用于 Effect 内部相关逻辑，不应作为普通事件处理器滥用。",
      },
      {
        question: "它和 useRef 保存最新值有什么区别？",
        answerHint: "useRef 是手动模式，容易绕过语义；Effect Event 更明确表达 effect 中的事件逻辑。",
      },
    ],
    relatedQuestionIds: [
      "react-useeffect-cleanup-abuse",
    ],
  },
  {
    id: "react-compiler-memo-impact",
    title: "React Compiler 对手写 memo 和 useMemo 有什么影响",
    summary: "考察编译期缓存、手动优化边界、纯函数约束和迁移策略。",
    shortAnswer: "考察编译期缓存、手动优化边界、纯函数约束和迁移策略。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React Compiler",
      "memo",
      "useMemo",
      "编译优化",
    ],
    interviewerFocus: [
      "是否理解 Compiler 目标是自动做安全缓存",
      "是否知道它依赖组件纯净和规则约束",
      "是否能说明手动 memo 仍有边界价值",
    ],
    answer: "React Compiler 的目标是基于静态分析自动插入安全的缓存，让很多手写 React.memo、useMemo、useCallback 不再是默认动作。它不是魔法加速器，前提是组件遵守 React 的纯渲染规则，不在 render 里读写可变外部状态，也不违反 Hooks 规则。迁移时我不会一次性删除所有 memo，而是先开启相关 lint 和编译检查，观察哪些组件能被安全优化，再删掉没有价值的手动缓存。对跨组件边界、第三方组件、昂贵计算或明确引用稳定契约，手动优化仍可能有意义。",
    oralAnswer: "React Compiler 的目标是基于静态分析自动插入安全的缓存，让很多手写 React.memo、useMemo、useCallback 不再是默认动作。它不是魔法加速器，前提是组件遵守 React 的纯渲染规则，不在 render 里读写可变外部状态，也不违反 Hooks 规则。迁移时我不会一次性删除所有 memo，而是先开启相关 lint 和编译检查，观察哪些组件能被安全优化，再删掉没有价值的手动缓存。对跨组件边界、第三方组件、昂贵计算或明确引用稳定契约，手动优化仍可能有意义。",
    keyPoints: [
      "Compiler 自动做安全缓存",
      "依赖纯渲染约束",
      "迁移要配合 lint 和度量",
      "手动优化仍有边界场景",
    ],
    followUps: [
      {
        question: "React Compiler 能修复不纯组件吗？",
        answerHint: "不能。不纯组件通常会被跳过或报警，需要先修正代码语义。",
      },
      {
        question: "有了 Compiler 还需要 Profiler 吗？",
        answerHint: "需要。Compiler 降低手动优化成本，但性能瓶颈仍要通过度量确认。",
      },
    ],
    relatedQuestionIds: [
      "react-memo-invalid-cases",
      "react-render-performance",
    ],
  },
  {
    id: "react-useeffect-cleanup-abuse",
    title: "useEffect 滥用会导致哪些架构和性能问题",
    summary: "考察同步外部系统、派生状态、请求竞态和 effect 清理。",
    shortAnswer: "考察同步外部系统、派生状态、请求竞态和 effect 清理。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "useEffect",
      "副作用",
      "请求竞态",
      "派生状态",
    ],
    interviewerFocus: [
      "是否知道 useEffect 是同步外部系统的工具",
      "是否能识别派生状态和事件逻辑不应放进 effect",
      "是否考虑清理函数和竞态问题",
    ],
    answer: "useEffect 最常见的滥用，是把所有“状态变化后的逻辑”都塞进去。实际上 effect 更适合同步外部系统，比如订阅、定时器、DOM API、网络连接等；如果只是根据 props/state 计算派生值，应该直接计算或用 memo；如果是用户点击导致的动作，应该放在事件处理器里。滥用 effect 会带来重复请求、依赖数组难维护、闭包旧值、竞态覆盖和清理遗漏。我的判断方式是先问：这个逻辑是否在组件显示到屏幕后需要和外部系统保持同步？如果不是，通常不该用 effect。",
    oralAnswer: "useEffect 最常见的滥用，是把所有“状态变化后的逻辑”都塞进去。实际上 effect 更适合同步外部系统，比如订阅、定时器、DOM API、网络连接等；如果只是根据 props/state 计算派生值，应该直接计算或用 memo；如果是用户点击导致的动作，应该放在事件处理器里。滥用 effect 会带来重复请求、依赖数组难维护、闭包旧值、竞态覆盖和清理遗漏。我的判断方式是先问：这个逻辑是否在组件显示到屏幕后需要和外部系统保持同步？如果不是，通常不该用 effect。",
    keyPoints: [
      "effect 用于同步外部系统",
      "派生值不应滥用 effect",
      "事件动作应放事件处理器",
      "要处理清理和竞态",
    ],
    followUps: [
      {
        question: "请求数据一定要写在 useEffect 里吗？",
        answerHint: "不一定。框架数据层、缓存库或 Suspense 数据方案可能更适合复杂场景。",
      },
      {
        question: "如何避免旧请求覆盖新请求？",
        answerHint: "可以用 AbortController、请求序号或数据层缓存机制确保只提交最新结果。",
      },
    ],
    relatedQuestionIds: [
      "react-useeffectevent-dependency",
    ],
  },
  {
    id: "react-request-hook-cancellation",
    title: "如何设计支持取消和竞态保护的 React 请求 Hook",
    summary: "考察 AbortController、请求序号、状态边界和错误处理。",
    shortAnswer: "考察 AbortController、请求序号、状态边界和错误处理。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Hook",
      "AbortController",
      "请求竞态",
      "错误处理",
    ],
    interviewerFocus: [
      "是否考虑组件卸载时取消请求",
      "是否能避免旧响应覆盖新响应",
      "是否区分 loading、error、data 和 aborted",
    ],
    answer: "我会把这个 Hook 的目标拆成三件事：发起请求、保护结果提交、暴露清晰状态。请求层用 AbortController 支持取消，组件卸载或参数变化时 abort 上一次请求；同时维护 requestId 或版本号，即使某些请求无法真正取消，也只允许最新请求提交结果。状态上不要只有 loading，至少要区分 data、error、loading，必要时区分 aborted，避免把用户主动取消显示成错误。Hook 还应把请求函数和参数依赖设计清楚，避免调用方每次 render 都创建新引用导致重复请求。",
    oralAnswer: "我会把这个 Hook 的目标拆成三件事：发起请求、保护结果提交、暴露清晰状态。请求层用 AbortController 支持取消，组件卸载或参数变化时 abort 上一次请求；同时维护 requestId 或版本号，即使某些请求无法真正取消，也只允许最新请求提交结果。状态上不要只有 loading，至少要区分 data、error、loading，必要时区分 aborted，避免把用户主动取消显示成错误。Hook 还应把请求函数和参数依赖设计清楚，避免调用方每次 render 都创建新引用导致重复请求。",
    keyPoints: [
      "卸载或参数变化时取消请求",
      "requestId 防旧结果覆盖",
      "清晰区分请求状态",
      "依赖设计要稳定",
    ],
    followUps: [
      {
        question: "AbortController 能取消所有异步逻辑吗？",
        answerHint: "不能。它主要适配支持 signal 的 API，不支持时仍需结果提交保护。",
      },
      {
        question: "为什么不能只靠 loading 判断请求状态？",
        answerHint: "loading 只能表示进行中，无法表达错误、取消、空数据和已有缓存。",
      },
    ],
    relatedQuestionIds: [
      "react-useeffect-cleanup-abuse",
    ],
  },
  {
    id: "react-large-form-state-design",
    title: "大型 React 表单如何设计受控和非受控状态",
    summary: "考察表单性能、校验触发、字段订阅和状态组织。",
    shortAnswer: "考察表单性能、校验触发、字段订阅和状态组织。",
    category: "react",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "表单",
      "受控组件",
      "非受控组件",
      "性能",
    ],
    interviewerFocus: [
      "是否能根据字段数量和交互频率选择状态模式",
      "是否考虑字段级订阅减少重渲染",
      "是否知道校验时机影响用户体验",
    ],
    answer: "大型表单我不会一上来把所有字段都放到父组件 state 里做完全受控，因为每次输入都可能让大范围组件重渲染。更常见的设计是核心业务状态受控，普通输入用非受控或字段级订阅管理，只在提交、失焦或校验时同步。校验也要分层：必填、格式这类可以即时或失焦校验，跨字段、远程唯一性校验要防抖并处理竞态。组件设计上要让每个字段只订阅自己关心的值和错误，复杂表单再配合 schema 推导类型，保证提交数据和校验规则一致。",
    oralAnswer: "大型表单我不会一上来把所有字段都放到父组件 state 里做完全受控，因为每次输入都可能让大范围组件重渲染。更常见的设计是核心业务状态受控，普通输入用非受控或字段级订阅管理，只在提交、失焦或校验时同步。校验也要分层：必填、格式这类可以即时或失焦校验，跨字段、远程唯一性校验要防抖并处理竞态。组件设计上要让每个字段只订阅自己关心的值和错误，复杂表单再配合 schema 推导类型，保证提交数据和校验规则一致。",
    keyPoints: [
      "避免所有字段集中受控",
      "字段级订阅减少重渲染",
      "校验触发要分层",
      "schema 可统一类型和规则",
    ],
    followUps: [
      {
        question: "完全非受控表单有什么风险？",
        answerHint: "业务状态不透明，联动、校验和提交前预览会更难维护。",
      },
      {
        question: "如何处理跨字段校验？",
        answerHint: "应在表单模型层处理，避免每个字段组件互相读取造成耦合。",
      },
    ],
    relatedQuestionIds: [
      "ts-schema-form-inference",
    ],
  },
  {
    id: "react-optimistic-update-rollback",
    title: "React 中如何设计乐观更新和失败回滚",
    summary: "考察用户体验、缓存一致性、失败补偿和并发提交。",
    shortAnswer: "考察用户体验、缓存一致性、失败补偿和并发提交。",
    category: "react",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "乐观更新",
      "回滚",
      "缓存一致性",
      "交互体验",
    ],
    interviewerFocus: [
      "是否理解乐观更新改善反馈速度",
      "是否能设计失败回滚和提示",
      "是否考虑多次并发操作的顺序问题",
    ],
    answer: "乐观更新适合成功率高、用户期望立即反馈的操作，比如点赞、收藏、排序。实现上先保存变更前快照，再立即更新本地状态或缓存；请求成功后用服务端结果校准，请求失败则回滚快照并给出明确提示。复杂点在并发操作：用户连续点多次、列表排序同时提交、或者多个请求返回顺序不同，都可能让回滚覆盖后续正确状态。所以我会给每次操作建立 operation id，或者把变更做成可重放的 patch，由数据层统一提交、确认和回滚。",
    oralAnswer: "乐观更新适合成功率高、用户期望立即反馈的操作，比如点赞、收藏、排序。实现上先保存变更前快照，再立即更新本地状态或缓存；请求成功后用服务端结果校准，请求失败则回滚快照并给出明确提示。复杂点在并发操作：用户连续点多次、列表排序同时提交、或者多个请求返回顺序不同，都可能让回滚覆盖后续正确状态。所以我会给每次操作建立 operation id，或者把变更做成可重放的 patch，由数据层统一提交、确认和回滚。",
    keyPoints: [
      "适合高成功率交互",
      "先快照再本地更新",
      "失败需回滚和提示",
      "并发操作要有顺序保护",
    ],
    followUps: [
      {
        question: "哪些操作不适合乐观更新？",
        answerHint: "低成功率、强一致、金额或权限相关操作不适合轻易乐观更新。",
      },
      {
        question: "回滚时如何避免覆盖用户后续操作？",
        answerHint: "用操作 id、版本号或 patch 队列，只回滚对应操作影响。",
      },
    ],
    relatedQuestionIds: [
      "react-request-hook-cancellation",
    ],
  },
  {
    id: "react-context-selector-splitting",
    title: "Context 频繁更新时如何拆分和降低重渲染",
    summary: "考察 Context 更新机制、状态拆分、选择器和组件边界。",
    shortAnswer: "考察 Context 更新机制、状态拆分、选择器和组件边界。",
    category: "react",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Context",
      "重渲染",
      "状态拆分",
      "selector",
    ],
    interviewerFocus: [
      "是否知道 context value 变化会通知所有消费者",
      "是否能拆分高频和低频状态",
      "是否会通过组件边界减少影响面",
    ],
    answer: "Context 的问题通常不是不能用，而是把太多变化频率不同的状态塞进一个 value。只要 Provider 的 value 引用变化，读取这个 context 的消费者都可能重新渲染。优化时我会先拆分 context，把主题、用户信息、权限、实时输入这类不同频率状态分开；Provider value 中的对象和函数也要保持必要的引用稳定。更进一步可以用 selector 模式或外部 store，让组件只订阅自己关心的片段。最后还要通过组件拆分，把真正变化的区域限制在更小的子树里。",
    oralAnswer: "Context 的问题通常不是不能用，而是把太多变化频率不同的状态塞进一个 value。只要 Provider 的 value 引用变化，读取这个 context 的消费者都可能重新渲染。优化时我会先拆分 context，把主题、用户信息、权限、实时输入这类不同频率状态分开；Provider value 中的对象和函数也要保持必要的引用稳定。更进一步可以用 selector 模式或外部 store，让组件只订阅自己关心的片段。最后还要通过组件拆分，把真正变化的区域限制在更小的子树里。",
    keyPoints: [
      "context value 变化会影响消费者",
      "按变化频率拆分 context",
      "保持 value 引用稳定",
      "selector 可减少订阅范围",
    ],
    followUps: [
      {
        question: "useMemo 包住 Provider value 就一定够吗？",
        answerHint: "不一定。依赖变化时 value 仍会变，消费者范围过大仍会重渲染。",
      },
      {
        question: "Context 适合管理高频输入状态吗？",
        answerHint: "通常不适合，高频局部状态应尽量下沉或使用更细粒度订阅。",
      },
    ],
    relatedQuestionIds: [
      "react-render-performance",
    ],
  },
  {
    id: "ts-unknown-vs-any",
    title: "TypeScript 中 unknown 和 any 在工程里如何取舍",
    summary: "考察类型安全边界、外部输入、类型收窄和 any 风险。",
    shortAnswer: "考察类型安全边界、外部输入、类型收窄和 any 风险。",
    category: "typescript",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "unknown",
      "any",
      "类型收窄",
      "类型安全",
    ],
    interviewerFocus: [
      "是否知道 unknown 比 any 更安全",
      "是否能说明外部输入应先收窄再使用",
      "是否理解 any 会污染类型系统",
    ],
    answer: "unknown 和 any 都可以表示暂时不知道类型，但语义完全不同。any 等于告诉 TypeScript 不要检查，后续属性访问、函数调用都会放行，容易把不安全扩散到整条链路；unknown 则要求你先做类型收窄，比如 typeof、in、Array.isArray 或 schema 校验，确认之后才能使用。在工程里，我会把接口原始响应、localStorage、postMessage、第三方回调这类外部输入先标成 unknown，再通过解析函数转成可信业务类型。any 只在迁移老代码或类型缺失的临时边界使用，并且要尽快收口。",
    oralAnswer: "unknown 和 any 都可以表示暂时不知道类型，但语义完全不同。any 等于告诉 TypeScript 不要检查，后续属性访问、函数调用都会放行，容易把不安全扩散到整条链路；unknown 则要求你先做类型收窄，比如 typeof、in、Array.isArray 或 schema 校验，确认之后才能使用。在工程里，我会把接口原始响应、localStorage、postMessage、第三方回调这类外部输入先标成 unknown，再通过解析函数转成可信业务类型。any 只在迁移老代码或类型缺失的临时边界使用，并且要尽快收口。",
    keyPoints: [
      "unknown 需要先收窄",
      "any 会关闭类型检查",
      "外部输入适合 unknown",
      "any 应限制在临时边界",
    ],
    followUps: [
      {
        question: "unknown 能直接赋值给业务类型吗？",
        answerHint: "不能，需要经过类型守卫或运行时校验确认结构。",
      },
      {
        question: "为什么 any 会污染类型？",
        answerHint: "any 参与表达式后会让后续推导失去检查，错误可能传得很远。",
      },
    ],
    relatedQuestionIds: [
      "ts-runtime-validation",
    ],
  },
  {
    id: "ts-never-exhaustive-check",
    title: "never 如何帮助做穷尽检查和不可能状态建模",
    summary: "考察联合类型穷尽、控制流分析和状态机兜底。",
    shortAnswer: "考察联合类型穷尽、控制流分析和状态机兜底。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "never",
      "穷尽检查",
      "联合类型",
      "状态机",
    ],
    interviewerFocus: [
      "是否理解 never 表示不可能出现的值",
      "是否会用 never 做 switch 穷尽检查",
      "是否能用它暴露新增状态未处理的问题",
    ],
    answer: "never 表示理论上不可能存在的值，常用于穷尽检查。比如一个 discriminated union 有 loading、success、error 三种状态，在 switch 里处理完所有 case 后，default 分支应该拿到 never；如果以后新增 empty 状态但忘了处理，TypeScript 就会报错。这在业务状态机、权限动作、事件类型处理中很有价值，因为它把“漏处理状态”变成编译期问题。另一个场景是函数永远抛错或无限循环时返回 never，但面试里更常考的是穷尽检查。",
    oralAnswer: "never 表示理论上不可能存在的值，常用于穷尽检查。比如一个 discriminated union 有 loading、success、error 三种状态，在 switch 里处理完所有 case 后，default 分支应该拿到 never；如果以后新增 empty 状态但忘了处理，TypeScript 就会报错。这在业务状态机、权限动作、事件类型处理中很有价值，因为它把“漏处理状态”变成编译期问题。另一个场景是函数永远抛错或无限循环时返回 never，但面试里更常考的是穷尽检查。",
    keyPoints: [
      "never 表示不可能值",
      "可用于 switch 穷尽检查",
      "新增状态未处理会暴露",
      "适合状态机和事件类型",
    ],
    followUps: [
      {
        question: "never 和 void 有什么区别？",
        answerHint: "void 表示没有有意义返回值，never 表示函数不会正常返回或值不可能存在。",
      },
      {
        question: "为什么穷尽检查比 default 静默兜底更好？",
        answerHint: "静默兜底会掩盖新增状态遗漏，never 能让编译器提醒你补逻辑。",
      },
    ],
    relatedQuestionIds: [
      "ts-discriminated-union-ui-state",
    ],
  },
  {
    id: "ts-generic-business-component",
    title: "泛型业务组件如何设计才不会过度抽象",
    summary: "考察泛型约束、列配置、回调类型和业务扩展边界。",
    shortAnswer: "考察泛型约束、列配置、回调类型和业务扩展边界。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "泛型",
      "业务组件",
      "组件 API",
      "类型约束",
    ],
    interviewerFocus: [
      "是否能用泛型表达数据项和字段关系",
      "是否避免为了通用性牺牲可读性",
      "是否能约束回调和配置项类型",
    ],
    answer: "泛型业务组件最常见的是表格、选择器、列表这类组件。设计时我会让泛型代表核心数据项，比如 TItem，再让 columns、rowKey、onSelect 等 API 基于 TItem 推导，避免调用方手写重复类型。关键是泛型要服务真实变化点，而不是把所有业务差异都塞进一个超级组件。比如列渲染可以开放 render(item)，但权限、接口请求、弹窗流程这类业务规则不应该进入通用组件。好的泛型组件应该让常见场景推导自然，复杂场景也能显式指定类型。",
    oralAnswer: "泛型业务组件最常见的是表格、选择器、列表这类组件。设计时我会让泛型代表核心数据项，比如 TItem，再让 columns、rowKey、onSelect 等 API 基于 TItem 推导，避免调用方手写重复类型。关键是泛型要服务真实变化点，而不是把所有业务差异都塞进一个超级组件。比如列渲染可以开放 render(item)，但权限、接口请求、弹窗流程这类业务规则不应该进入通用组件。好的泛型组件应该让常见场景推导自然，复杂场景也能显式指定类型。",
    keyPoints: [
      "泛型应绑定核心数据项",
      "配置和回调从 TItem 推导",
      "不要把业务规则塞进通用组件",
      "常见场景应自动推导",
    ],
    followUps: [
      {
        question: "泛型组件什么时候需要显式传类型？",
        answerHint: "当数据来源为空数组、联合类型复杂或推导信息不足时，可以显式指定。",
      },
      {
        question: "如何避免泛型参数越来越多？",
        answerHint: "把真正独立变化点抽出来，其余通过约束、默认泛型或组合组件表达。",
      },
    ],
  },
  {
    id: "ts-type-safe-request-layer",
    title: "如何设计类型安全的前端请求层",
    summary: "考察请求泛型、错误模型、运行时校验和业务调用体验。",
    shortAnswer: "考察请求泛型、错误模型、运行时校验和业务调用体验。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "请求层",
      "泛型",
      "类型安全",
      "错误模型",
    ],
    interviewerFocus: [
      "是否能把响应数据和错误类型建模清楚",
      "是否考虑运行时校验补足 TS 边界",
      "是否让业务调用方少写重复类型",
    ],
    answer: "类型安全请求层不能只写 request<T>() 然后相信后端一定返回 T。我的设计会分三层：底层封装 fetch/axios，统一处理 baseURL、headers、超时、取消；中间层定义响应 envelope 和错误模型，比如业务错误、网络错误、鉴权错误；业务层用具体 API 函数暴露明确入参和出参类型。对于外部响应，最好配合 schema 做运行时校验，把 unknown 转成可信类型。这样调用方拿到的是 Result 或明确抛错策略，而不是到处 try/catch 和 any。",
    oralAnswer: "类型安全请求层不能只写 request<T>() 然后相信后端一定返回 T。我的设计会分三层：底层封装 fetch/axios，统一处理 baseURL、headers、超时、取消；中间层定义响应 envelope 和错误模型，比如业务错误、网络错误、鉴权错误；业务层用具体 API 函数暴露明确入参和出参类型。对于外部响应，最好配合 schema 做运行时校验，把 unknown 转成可信类型。这样调用方拿到的是 Result 或明确抛错策略，而不是到处 try/catch 和 any。",
    keyPoints: [
      "request<T> 不是完整安全",
      "需要统一错误模型",
      "API 函数暴露明确类型",
      "运行时校验补足边界",
    ],
    followUps: [
      {
        question: "为什么接口响应不能直接 as 成业务类型？",
        answerHint: "as 只是编译期断言，无法保证运行时数据结构真的正确。",
      },
      {
        question: "请求层应该返回 data 还是 Result？",
        answerHint: "看团队约定。Result 更显式，抛错更简洁，但必须统一错误处理策略。",
      },
    ],
    relatedQuestionIds: [
      "ts-runtime-validation",
      "react-request-hook-cancellation",
    ],
  },
  {
    id: "ts-schema-form-inference",
    title: "如何从表单 Schema 推导表单值和错误类型",
    summary: "考察 schema 单一事实源、字段类型推导和校验结果建模。",
    shortAnswer: "考察 schema 单一事实源、字段类型推导和校验结果建模。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "表单",
      "Schema",
      "类型推导",
      "校验",
    ],
    interviewerFocus: [
      "是否能用 schema 统一字段和校验规则",
      "是否知道表单值类型应从 schema 推导",
      "是否能建模错误对象和嵌套字段",
    ],
    answer: "表单 schema 的价值是把字段、默认值、校验规则和类型尽量收敛到一个事实源。理想情况下，schema 定义 name、age、role 这些字段后，表单值类型可以自动推导出来，提交函数拿到的就是 FormValues，而不是手写一份容易漂移的 interface。错误类型也可以按字段路径建模，比如 Partial<Record<FieldPath, string>> 或更严格的嵌套结构。复杂表单还要考虑数组字段、条件字段和跨字段校验，所以 schema 不只是 UI 配置，也要服务数据约束。",
    oralAnswer: "表单 schema 的价值是把字段、默认值、校验规则和类型尽量收敛到一个事实源。理想情况下，schema 定义 name、age、role 这些字段后，表单值类型可以自动推导出来，提交函数拿到的就是 FormValues，而不是手写一份容易漂移的 interface。错误类型也可以按字段路径建模，比如 Partial<Record<FieldPath, string>> 或更严格的嵌套结构。复杂表单还要考虑数组字段、条件字段和跨字段校验，所以 schema 不只是 UI 配置，也要服务数据约束。",
    keyPoints: [
      "schema 是字段事实源",
      "表单值应自动推导",
      "错误类型要匹配字段路径",
      "复杂字段需要额外建模",
    ],
    followUps: [
      {
        question: "schema 和 interface 同时手写有什么风险？",
        answerHint: "两套定义容易不一致，字段新增或改名时类型和校验会漂移。",
      },
      {
        question: "动态字段如何保持类型安全？",
        answerHint: "需要把动态规则限制在可枚举配置或用更明确的字段路径类型表达。",
      },
    ],
    relatedQuestionIds: [
      "react-large-form-state-design",
    ],
  },
  {
    id: "ts-conditional-infer-pattern",
    title: "条件类型中的 infer 适合解决哪些类型提取问题",
    summary: "考察类型模式匹配、返回值提取、Promise 解包和工具类型。",
    shortAnswer: "考察类型模式匹配、返回值提取、Promise 解包和工具类型。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "infer",
      "条件类型",
      "工具类型",
      "类型提取",
    ],
    interviewerFocus: [
      "是否理解 infer 是在条件类型中声明待推断变量",
      "是否能举出返回值和 Promise 解包场景",
      "是否知道复杂 infer 会降低可读性",
    ],
    answer: "infer 可以理解成类型层面的模式匹配：当 T 符合某个结构时，把结构里的某一部分提取出来。比如 T extends Promise<infer R> ? R : T 可以提取 Promise 的结果类型；T extends (...args: any[]) => infer R ? R : never 可以提取函数返回值。业务里常见于请求函数返回值、组件 props、事件 payload、嵌套数组元素类型等。需要克制的是，infer 写得太深会让团队很难维护，面向业务代码时要用命名清晰的工具类型封装起来。",
    oralAnswer: "infer 可以理解成类型层面的模式匹配：当 T 符合某个结构时，把结构里的某一部分提取出来。比如 T extends Promise<infer R> ? R : T 可以提取 Promise 的结果类型；T extends (...args: any[]) => infer R ? R : never 可以提取函数返回值。业务里常见于请求函数返回值、组件 props、事件 payload、嵌套数组元素类型等。需要克制的是，infer 写得太深会让团队很难维护，面向业务代码时要用命名清晰的工具类型封装起来。",
    keyPoints: [
      "infer 用于类型模式匹配",
      "可提取 Promise 和函数返回值",
      "适合封装工具类型",
      "复杂类型要注意可读性",
    ],
    followUps: [
      {
        question: "infer 能在普通泛型约束里使用吗？",
        answerHint: "不能，infer 只能出现在条件类型的 extends 子句中。",
      },
      {
        question: "为什么工具类型需要命名封装？",
        answerHint: "复杂条件类型直接散落业务代码会难读难调试。",
      },
    ],
    relatedQuestionIds: [
      "ts-type-vs-interface",
    ],
  },
  {
    id: "ts-avoid-any-spread",
    title: "如何治理项目中的 any 泛滥",
    summary: "考察类型债务治理、边界收口、渐进迁移和工程规则。",
    shortAnswer: "考察类型债务治理、边界收口、渐进迁移和工程规则。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "any",
      "类型治理",
      "工程规范",
      "迁移",
    ],
    interviewerFocus: [
      "是否能区分存量债务和新增约束",
      "是否知道 any 应收口在边界层",
      "是否能设计渐进治理策略",
    ],
    answer: "治理 any 不能只靠一句“禁止 any”，否则老项目会推不动。我会先分层：外部输入、第三方库、历史模块可以暂时允许，但必须集中在边界层，用 unknown、schema、类型守卫逐步收口；新代码通过 ESLint 规则和 code review 限制显式 any。然后按风险排序治理核心链路，比如请求层、表单提交、权限和埋点 payload。迁移时要避免一次性大改，可以先给公共函数补泛型和返回类型，让下游自然获得推导。目标不是零 any，而是 any 不扩散、不进入业务核心。",
    oralAnswer: "治理 any 不能只靠一句“禁止 any”，否则老项目会推不动。我会先分层：外部输入、第三方库、历史模块可以暂时允许，但必须集中在边界层，用 unknown、schema、类型守卫逐步收口；新代码通过 ESLint 规则和 code review 限制显式 any。然后按风险排序治理核心链路，比如请求层、表单提交、权限和埋点 payload。迁移时要避免一次性大改，可以先给公共函数补泛型和返回类型，让下游自然获得推导。目标不是零 any，而是 any 不扩散、不进入业务核心。",
    keyPoints: [
      "治理要渐进推进",
      "any 应限制在边界层",
      "核心链路优先收口",
      "规则和 review 防新增债务",
    ],
    followUps: [
      {
        question: "所有 any 都必须立刻删除吗？",
        answerHint: "不现实。应优先治理高风险路径，并阻止新增扩散。",
      },
      {
        question: "unknown 能完全替代 any 吗？",
        answerHint: "不能完全替代，但外部不可信输入优先 unknown 更安全。",
      },
    ],
    relatedQuestionIds: [
      "ts-unknown-vs-any",
    ],
  },
  {
    id: "ts-runtime-validation",
    title: "TypeScript 类型安全为什么还需要运行时校验",
    summary: "考察编译期类型边界、外部数据、schema 校验和错误处理。",
    shortAnswer: "考察编译期类型边界、外部数据、schema 校验和错误处理。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "运行时校验",
      "schema",
      "类型安全",
      "外部数据",
    ],
    interviewerFocus: [
      "是否知道 TypeScript 类型运行时会被擦除",
      "是否能识别接口、缓存和用户输入都是不可信边界",
      "是否能把校验结果和业务错误结合",
    ],
    answer: "TypeScript 只在编译期工作，运行时不会真的检查接口返回、localStorage、URL 参数或用户输入是否符合类型。所以只靠 interface 不能保证数据安全，尤其是后端字段变更、灰度版本不一致、缓存脏数据时。我的做法是把外部输入先视为 unknown，通过 schema 或手写类型守卫校验，成功后再转成业务类型；失败则进入统一错误处理，比如降级、上报或展示数据异常。这样类型系统和运行时校验形成闭环，而不是用 as 把风险藏起来。",
    oralAnswer: "TypeScript 只在编译期工作，运行时不会真的检查接口返回、localStorage、URL 参数或用户输入是否符合类型。所以只靠 interface 不能保证数据安全，尤其是后端字段变更、灰度版本不一致、缓存脏数据时。我的做法是把外部输入先视为 unknown，通过 schema 或手写类型守卫校验，成功后再转成业务类型；失败则进入统一错误处理，比如降级、上报或展示数据异常。这样类型系统和运行时校验形成闭环，而不是用 as 把风险藏起来。",
    keyPoints: [
      "TS 类型运行时会擦除",
      "外部数据都不可信",
      "unknown 经校验转业务类型",
      "校验失败要进入错误处理",
    ],
    followUps: [
      {
        question: "哪些位置最需要运行时校验？",
        answerHint: "接口响应、URL 参数、本地缓存、跨窗口消息和第三方 SDK 回调。",
      },
      {
        question: "运行时校验会不会影响性能？",
        answerHint: "会有成本，但可在边界校验关键字段，并按场景做采样或缓存 schema 结果。",
      },
    ],
    relatedQuestionIds: [
      "ts-type-safe-request-layer",
    ],
  },
  {
    id: "ts-discriminated-union-ui-state",
    title: "如何用可辨识联合类型设计复杂 UI 状态",
    summary: "考察状态互斥、类型收窄、非法状态消除和 UI 分支。",
    shortAnswer: "考察状态互斥、类型收窄、非法状态消除和 UI 分支。",
    category: "typescript",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "可辨识联合",
      "UI 状态",
      "类型收窄",
      "状态机",
    ],
    interviewerFocus: [
      "是否能用 status 字段表达互斥状态",
      "是否避免 loading、data、error 任意组合",
      "是否能配合 never 做穷尽检查",
    ],
    answer: "复杂 UI 状态如果用 loading、data、error 三个独立字段，很容易出现 loading=true 但又有 error 和 data 的非法组合。可辨识联合类型更清晰，比如 {status: \"loading\"}、{status: \"success\", data}、{status: \"error\", error}。渲染时 switch status，TypeScript 会自动收窄每个分支能访问的字段，避免你在 loading 状态读 data。再配合 never 做穷尽检查，后续新增 empty 或 refreshing 状态时，编译器会提醒哪些 UI 分支没补。",
    oralAnswer: "复杂 UI 状态如果用 loading、data、error 三个独立字段，很容易出现 loading=true 但又有 error 和 data 的非法组合。可辨识联合类型更清晰，比如 {status: \"loading\"}、{status: \"success\", data}、{status: \"error\", error}。渲染时 switch status，TypeScript 会自动收窄每个分支能访问的字段，避免你在 loading 状态读 data。再配合 never 做穷尽检查，后续新增 empty 或 refreshing 状态时，编译器会提醒哪些 UI 分支没补。",
    keyPoints: [
      "联合类型表达互斥状态",
      "避免非法字段组合",
      "switch 可自动收窄",
      "never 可做穷尽检查",
    ],
    followUps: [
      {
        question: "什么时候不需要上状态机？",
        answerHint: "简单二元状态用 boolean 足够，状态多且互斥关系复杂时再用联合或状态机。",
      },
      {
        question: "刷新中但保留旧数据怎么建模？",
        answerHint: "可以增加 refreshing 状态并携带旧 data，明确表达 UI 仍可展示旧内容。",
      },
    ],
    relatedQuestionIds: [
      "ts-never-exhaustive-check",
    ],
  },
  {
    id: "performance-lcp-optimization-path",
    title: "LCP 变差时如何系统定位和优化",
    summary: "考察 LCP 元素识别、资源链路、服务端响应和渲染阻塞。",
    shortAnswer: "考察 LCP 元素识别、资源链路、服务端响应和渲染阻塞。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "LCP",
      "首屏",
      "资源加载",
      "渲染阻塞",
    ],
    interviewerFocus: [
      "是否知道先确认 LCP 元素和发生阶段",
      "是否能从 TTFB、资源加载、渲染阻塞分层排查",
      "是否会用真实用户数据验证优化效果",
    ],
    answer: "我排查 LCP 会先确认 LCP 元素是什么，是首图、标题还是某个内容块，然后看它慢在服务端响应、资源下载还是前端渲染。服务端慢就看 TTFB、缓存和接口聚合；资源慢就看图片尺寸、格式、preload、优先级和 CDN；渲染慢就看 CSS、字体、JS 长任务是否阻塞首屏。优化动作不能只看 Lighthouse，一定要接入 RUM 分位数，比如 P75 LCP，按页面、设备、网络分组观察。最后用实验室数据定位原因，用线上数据验证收益，避免只优化了本地环境。",
    oralAnswer: "我排查 LCP 会先确认 LCP 元素是什么，是首图、标题还是某个内容块，然后看它慢在服务端响应、资源下载还是前端渲染。服务端慢就看 TTFB、缓存和接口聚合；资源慢就看图片尺寸、格式、preload、优先级和 CDN；渲染慢就看 CSS、字体、JS 长任务是否阻塞首屏。优化动作不能只看 Lighthouse，一定要接入 RUM 分位数，比如 P75 LCP，按页面、设备、网络分组观察。最后用实验室数据定位原因，用线上数据验证收益，避免只优化了本地环境。",
    keyPoints: [
      "先识别 LCP 元素",
      "分层看 TTFB、资源和渲染",
      "首图可用 preload 和尺寸优化",
      "用 RUM P75 验证效果",
    ],
    followUps: [
      {
        question: "为什么 LCP 优化不能只看平均值？",
        answerHint: "平均值会掩盖慢用户，Web Vitals 更关注 P75 这类真实体验分位数。",
      },
      {
        question: "preload LCP 图片有什么风险？",
        answerHint: "资源太多或优先级错误会挤占关键 CSS/JS，反而影响首屏。",
      },
    ],
    relatedQuestionIds: [
      "performance-core-web-vitals",
      "browser-render-pipeline",
    ],
  },
  {
    id: "performance-inp-replaces-fid",
    title: "INP 为什么替代 FID 成为核心交互指标",
    summary: "考察首次输入、全程交互、尾延迟和用户体验代表性。",
    shortAnswer: "考察首次输入、全程交互、尾延迟和用户体验代表性。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "INP",
      "FID",
      "交互性能",
      "Web Vitals",
    ],
    interviewerFocus: [
      "是否知道 FID 只关注首次输入延迟",
      "是否理解 INP 覆盖页面生命周期内多次交互",
      "是否能说明 INP 更关注长尾交互体验",
    ],
    answer: "FID 只衡量用户第一次交互到浏览器能开始处理事件之间的延迟，它覆盖面比较窄，也不包含事件处理和下一帧绘制完成的时间。INP 更接近用户实际感受，它观察页面整个生命周期内的交互，关注从输入发生到下一次视觉反馈完成的耗时，并用较差交互代表体验尾部。对于现代前端应用，用户进入页面后会持续点击、输入、切换 tab，慢的不一定是第一次交互，所以 INP 更能暴露主线程长任务、事件处理过重、渲染提交慢等问题。",
    oralAnswer: "FID 只衡量用户第一次交互到浏览器能开始处理事件之间的延迟，它覆盖面比较窄，也不包含事件处理和下一帧绘制完成的时间。INP 更接近用户实际感受，它观察页面整个生命周期内的交互，关注从输入发生到下一次视觉反馈完成的耗时，并用较差交互代表体验尾部。对于现代前端应用，用户进入页面后会持续点击、输入、切换 tab，慢的不一定是第一次交互，所以 INP 更能暴露主线程长任务、事件处理过重、渲染提交慢等问题。",
    keyPoints: [
      "FID 只看首次输入延迟",
      "INP 覆盖页面全程交互",
      "INP 包含处理和视觉反馈",
      "更能暴露长尾卡顿",
    ],
    followUps: [
      {
        question: "INP 高一定是 JavaScript 代码太多吗？",
        answerHint: "不一定，也可能是样式布局、渲染提交、第三方脚本或设备性能问题。",
      },
      {
        question: "优化 INP 的第一步是什么？",
        answerHint: "先定位慢交互和对应长任务，再拆分任务、降低渲染范围或延迟非关键工作。",
      },
    ],
    relatedQuestionIds: [
      "performance-core-web-vitals",
    ],
  },
  {
    id: "performance-cls-layout-shift",
    title: "CLS 波动通常由哪些布局偏移引起",
    summary: "考察图片尺寸、异步内容、字体切换、广告位和骨架屏稳定性。",
    shortAnswer: "考察图片尺寸、异步内容、字体切换、广告位和骨架屏稳定性。",
    category: "performance",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "CLS",
      "布局偏移",
      "图片尺寸",
      "字体加载",
    ],
    interviewerFocus: [
      "是否能识别常见布局偏移来源",
      "是否知道为异步内容预留稳定空间",
      "是否能用工具定位发生偏移的元素",
    ],
    answer: "CLS 的本质是用户没有预期到的视觉位置变化。常见原因包括图片或视频没有宽高，广告位和推荐模块异步插入，字体加载后字形变化导致文本重排，以及骨架屏和真实内容尺寸差异太大。优化时要给媒体资源设置明确尺寸或 aspect-ratio，给异步模块预留占位，字体使用 font-display 并控制 fallback 字体差异，避免在已有内容上方插入新块。验证上可以用 Chrome Performance 的 layout shift 记录看具体偏移元素，再用线上 CLS 分位数确认是否真正改善。",
    oralAnswer: "CLS 的本质是用户没有预期到的视觉位置变化。常见原因包括图片或视频没有宽高，广告位和推荐模块异步插入，字体加载后字形变化导致文本重排，以及骨架屏和真实内容尺寸差异太大。优化时要给媒体资源设置明确尺寸或 aspect-ratio，给异步模块预留占位，字体使用 font-display 并控制 fallback 字体差异，避免在已有内容上方插入新块。验证上可以用 Chrome Performance 的 layout shift 记录看具体偏移元素，再用线上 CLS 分位数确认是否真正改善。",
    keyPoints: [
      "媒体资源要有稳定尺寸",
      "异步内容需预留占位",
      "字体切换也会造成偏移",
      "用工具定位偏移元素",
    ],
    followUps: [
      {
        question: "骨架屏一定能降低 CLS 吗？",
        answerHint: "不一定，骨架屏尺寸和真实内容不一致时仍会产生偏移。",
      },
      {
        question: "用户点击后展开内容算不算 CLS？",
        answerHint: "用户明确交互触发的合理布局变化通常不计入非预期偏移。",
      },
    ],
    relatedQuestionIds: [
      "performance-core-web-vitals",
    ],
  },
  {
    id: "performance-long-task-debugging",
    title: "Long Task 应该如何排查和拆分",
    summary: "考察主线程阻塞、任务归因、拆分策略和交互响应验证。",
    shortAnswer: "考察主线程阻塞、任务归因、拆分策略和交互响应验证。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Long Task",
      "主线程",
      "任务拆分",
      "Performance",
    ],
    interviewerFocus: [
      "是否知道 Long Task 会阻塞输入和渲染",
      "是否能用 Performance 面板归因到函数和脚本",
      "是否能给出拆分、延迟和 worker 化策略",
    ],
    answer: "Long Task 通常指主线程上超过 50ms 的长任务，它会让输入事件排队、渲染无法及时发生，是 INP 变差的重要原因。排查时我会用 Performance 面板录制慢交互，看长任务来自业务计算、JSON 解析、列表渲染、第三方脚本还是样式布局。优化手段包括把大任务切片到多个宏任务，使用 requestIdleCallback 或 scheduler 延后非关键工作，把纯计算放到 Web Worker，减少同步布局读取和大范围 React 更新。验证时不能只看任务变短，还要看慢交互的 INP 和用户路径是否改善。",
    oralAnswer: "Long Task 通常指主线程上超过 50ms 的长任务，它会让输入事件排队、渲染无法及时发生，是 INP 变差的重要原因。排查时我会用 Performance 面板录制慢交互，看长任务来自业务计算、JSON 解析、列表渲染、第三方脚本还是样式布局。优化手段包括把大任务切片到多个宏任务，使用 requestIdleCallback 或 scheduler 延后非关键工作，把纯计算放到 Web Worker，减少同步布局读取和大范围 React 更新。验证时不能只看任务变短，还要看慢交互的 INP 和用户路径是否改善。",
    keyPoints: [
      "Long Task 会阻塞输入和渲染",
      "先归因到具体脚本和函数",
      "可拆分、延迟或 worker 化",
      "用交互指标验证收益",
    ],
    followUps: [
      {
        question: "把任务放到 setTimeout 就一定更快吗？",
        answerHint: "不一定，它只是让出主线程，整体耗时可能不变，需要看交互是否更流畅。",
      },
      {
        question: "什么任务适合放到 Web Worker？",
        answerHint: "纯计算、可序列化输入输出、与 DOM 无关的任务更适合。",
      },
    ],
    relatedQuestionIds: [
      "performance-inp-replaces-fid",
    ],
  },
  {
    id: "performance-page-jank-debugging",
    title: "页面卡顿时如何定位是脚本、样式还是渲染导致",
    summary: "考察卡顿路径、Performance 火焰图、布局抖动和第三方脚本。",
    shortAnswer: "考察卡顿路径、Performance 火焰图、布局抖动和第三方脚本。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "页面卡顿",
      "Performance",
      "渲染",
      "布局",
    ],
    interviewerFocus: [
      "是否能按用户操作复现卡顿路径",
      "是否能区分 scripting、rendering、painting 成本",
      "是否会验证优化前后的帧率和交互耗时",
    ],
    answer: "页面卡顿我不会先猜原因，而是先固定复现路径，比如点击筛选、输入搜索、滚动列表，然后用 Performance 录制。火焰图里如果 scripting 很高，就看业务函数、框架渲染或第三方脚本；rendering 高就看样式计算和布局，是否有强制同步布局；painting 或 compositing 高就看大面积重绘、阴影、滤镜和动画属性。React 应用还要结合 Profiler 看是不是组件树更新过大。优化后要用同样路径对比交互耗时、长任务数量和帧率，而不是只看代码感觉变轻。",
    oralAnswer: "页面卡顿我不会先猜原因，而是先固定复现路径，比如点击筛选、输入搜索、滚动列表，然后用 Performance 录制。火焰图里如果 scripting 很高，就看业务函数、框架渲染或第三方脚本；rendering 高就看样式计算和布局，是否有强制同步布局；painting 或 compositing 高就看大面积重绘、阴影、滤镜和动画属性。React 应用还要结合 Profiler 看是不是组件树更新过大。优化后要用同样路径对比交互耗时、长任务数量和帧率，而不是只看代码感觉变轻。",
    keyPoints: [
      "先固定可复现路径",
      "区分脚本、布局和绘制成本",
      "注意强制同步布局",
      "优化前后用同路径对比",
    ],
    followUps: [
      {
        question: "为什么 console.time 不够定位卡顿？",
        answerHint: "它只能看局部 JS 耗时，看不到布局、绘制、渲染帧和浏览器调度。",
      },
      {
        question: "动画卡顿优先检查什么？",
        answerHint: "检查是否动画了 layout/paint 属性，优先使用 transform 和 opacity。",
      },
    ],
    relatedQuestionIds: [
      "performance-long-task-debugging",
    ],
  },
  {
    id: "performance-first-screen-optimization",
    title: "首屏性能优化应该从哪些链路入手",
    summary: "考察网络、资源优先级、关键渲染路径、JS 执行和监控闭环。",
    shortAnswer: "考察网络、资源优先级、关键渲染路径、JS 执行和监控闭环。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "首屏性能",
      "关键渲染路径",
      "资源优先级",
      "监控",
    ],
    interviewerFocus: [
      "是否能把首屏拆成网络、资源、渲染和执行链路",
      "是否知道关键资源优先、非关键资源延后",
      "是否会用指标闭环验证",
    ],
    answer: "首屏优化要先定义目标，是 LCP、首屏可交互还是业务首屏完成。链路上通常从服务端响应、HTML 缓存、关键 CSS、首图资源、字体、JS 包体和首屏接口入手。关键资源要尽早发现并提高优先级，非关键 JS、埋点、低优先级组件和三方脚本要延后；如果是 SPA，还要控制首屏 bundle 和初始化逻辑。系统方案上我会用实验室工具定位瓶颈，用 RUM 按页面、设备、网络分组验证，避免把优化做成只对高端机器有效。",
    oralAnswer: "首屏优化要先定义目标，是 LCP、首屏可交互还是业务首屏完成。链路上通常从服务端响应、HTML 缓存、关键 CSS、首图资源、字体、JS 包体和首屏接口入手。关键资源要尽早发现并提高优先级，非关键 JS、埋点、低优先级组件和三方脚本要延后；如果是 SPA，还要控制首屏 bundle 和初始化逻辑。系统方案上我会用实验室工具定位瓶颈，用 RUM 按页面、设备、网络分组验证，避免把优化做成只对高端机器有效。",
    keyPoints: [
      "先定义首屏目标",
      "关键资源提前，非关键延后",
      "控制首屏 JS 和接口链路",
      "用 RUM 分组验证",
    ],
    followUps: [
      {
        question: "首屏优化为什么不能只做懒加载？",
        answerHint: "懒加载解决非关键资源，关键资源和服务端响应慢仍会影响首屏。",
      },
      {
        question: "SSR 一定能改善首屏吗？",
        answerHint: "不一定。SSR 改善 HTML 到达和内容展示，但 hydration 成本和服务端耗时也要控制。",
      },
    ],
    relatedQuestionIds: [
      "performance-lcp-optimization-path",
    ],
  },
  {
    id: "performance-image-optimization",
    title: "图片性能优化如何兼顾清晰度、体积和加载优先级",
    summary: "考察格式选择、响应式图片、懒加载、占位和 CDN 处理。",
    shortAnswer: "考察格式选择、响应式图片、懒加载、占位和 CDN 处理。",
    category: "performance",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "图片优化",
      "WebP",
      "AVIF",
      "响应式图片",
    ],
    interviewerFocus: [
      "是否能根据场景选择图片格式和尺寸",
      "是否知道首屏图和非首屏图优先级不同",
      "是否考虑占位尺寸和 CLS",
    ],
    answer: "图片优化不是简单压缩，首先要让用户下载刚好需要的尺寸和格式。内容图可以用 WebP/AVIF，配合 srcset 和 sizes 输出不同分辨率；首屏 LCP 图片要避免懒加载，必要时 preload 并设置 fetchpriority；非首屏图片才适合 lazy loading。还要设置 width、height 或 aspect-ratio 防止 CLS，使用 CDN 做裁剪、压缩和格式协商。验证时看图片字节数、LCP 资源加载瀑布、缓存命中和不同 DPR 设备的清晰度，不能只追求最小体积导致模糊。",
    oralAnswer: "图片优化不是简单压缩，首先要让用户下载刚好需要的尺寸和格式。内容图可以用 WebP/AVIF，配合 srcset 和 sizes 输出不同分辨率；首屏 LCP 图片要避免懒加载，必要时 preload 并设置 fetchpriority；非首屏图片才适合 lazy loading。还要设置 width、height 或 aspect-ratio 防止 CLS，使用 CDN 做裁剪、压缩和格式协商。验证时看图片字节数、LCP 资源加载瀑布、缓存命中和不同 DPR 设备的清晰度，不能只追求最小体积导致模糊。",
    keyPoints: [
      "按设备输出合适尺寸",
      "首屏图提高优先级",
      "非首屏图懒加载",
      "预留尺寸避免 CLS",
    ],
    followUps: [
      {
        question: "所有图片都用 AVIF 合适吗？",
        answerHint: "不一定，要考虑兼容、编码成本、图片类型和降级格式。",
      },
      {
        question: "为什么 LCP 图片不建议 lazy loading？",
        answerHint: "懒加载会推迟发现和下载关键图片，通常会拉长 LCP。",
      },
    ],
    relatedQuestionIds: [
      "performance-lcp-optimization-path",
      "performance-cls-layout-shift",
    ],
  },
  {
    id: "performance-font-optimization",
    title: "字体加载如何影响首屏和 CLS",
    summary: "考察字体阻塞、font-display、子集化、预加载和 fallback 匹配。",
    shortAnswer: "考察字体阻塞、font-display、子集化、预加载和 fallback 匹配。",
    category: "performance",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "字体优化",
      "font-display",
      "CLS",
      "preload",
    ],
    interviewerFocus: [
      "是否知道字体会影响文本展示和布局稳定性",
      "是否能选择合适的 font-display 策略",
      "是否考虑字体子集化和预加载范围",
    ],
    answer: "字体会同时影响首屏展示和布局稳定性。自定义字体如果阻塞太久，用户会看到空白文本或延迟展示；fallback 和最终字体差异大，又可能造成文本重排和 CLS。优化上我会尽量使用系统字体，必须自定义时做子集化、woff2、长期缓存，并只 preload 首屏真正需要的字体。font-display 要按场景取舍，swap 能快展示但可能有字体切换，optional 更保守。验证时看字体请求是否在关键路径、文本是否闪烁、CLS 是否受影响，以及不同语言字符集是否完整。",
    oralAnswer: "字体会同时影响首屏展示和布局稳定性。自定义字体如果阻塞太久，用户会看到空白文本或延迟展示；fallback 和最终字体差异大，又可能造成文本重排和 CLS。优化上我会尽量使用系统字体，必须自定义时做子集化、woff2、长期缓存，并只 preload 首屏真正需要的字体。font-display 要按场景取舍，swap 能快展示但可能有字体切换，optional 更保守。验证时看字体请求是否在关键路径、文本是否闪烁、CLS 是否受影响，以及不同语言字符集是否完整。",
    keyPoints: [
      "字体会影响展示和布局",
      "优先系统字体或子集化",
      "只预加载关键字体",
      "font-display 需要取舍",
    ],
    followUps: [
      {
        question: "font-display: swap 一定好吗？",
        answerHint: "不一定，swap 展示快但可能发生字体切换和布局变化。",
      },
      {
        question: "中文字体为什么更要谨慎？",
        answerHint: "中文字体体积大，完整字体下载成本高，通常要子集化或使用系统字体。",
      },
    ],
    relatedQuestionIds: [
      "performance-cls-layout-shift",
    ],
  },
  {
    id: "performance-react-render-slow-debugging",
    title: "React 页面渲染慢时如何定位组件和状态问题",
    summary: "考察 Profiler、状态边界、memo 失效、列表规模和提交成本。",
    shortAnswer: "考察 Profiler、状态边界、memo 失效、列表规模和提交成本。",
    category: "performance",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "React 性能",
      "Profiler",
      "重渲染",
      "状态边界",
    ],
    interviewerFocus: [
      "是否会先用 Profiler 定位慢组件",
      "是否能区分渲染次数多和单次渲染贵",
      "是否能从状态边界和列表规模给优化方案",
    ],
    answer: "React 渲染慢我会先用 React DevTools Profiler 找具体路径，看是某些组件频繁渲染，还是单次渲染本身很贵。频繁渲染通常和状态放得太高、context value 不稳定、props 新引用、memo 失效有关；单次渲染贵可能是大列表、复杂计算、富文本或图表。优化方案要对应原因：缩小状态影响范围、拆分 context、稳定必要引用、虚拟列表、缓存昂贵计算，或者把非紧急更新放进 transition。最后还要看 commit 时间和浏览器 Performance，避免只优化 React 层却忽略 DOM 和布局成本。",
    oralAnswer: "React 渲染慢我会先用 React DevTools Profiler 找具体路径，看是某些组件频繁渲染，还是单次渲染本身很贵。频繁渲染通常和状态放得太高、context value 不稳定、props 新引用、memo 失效有关；单次渲染贵可能是大列表、复杂计算、富文本或图表。优化方案要对应原因：缩小状态影响范围、拆分 context、稳定必要引用、虚拟列表、缓存昂贵计算，或者把非紧急更新放进 transition。最后还要看 commit 时间和浏览器 Performance，避免只优化 React 层却忽略 DOM 和布局成本。",
    keyPoints: [
      "Profiler 定位慢组件",
      "区分频繁渲染和单次渲染贵",
      "从状态边界和列表规模优化",
      "结合浏览器 Performance 验证",
    ],
    followUps: [
      {
        question: "React.memo 能解决所有渲染慢吗？",
        answerHint: "不能。引用不稳定、context 更新和单次渲染过重都可能让 memo 收益有限。",
      },
      {
        question: "为什么还要看 commit 时间？",
        answerHint: "render 优化不代表 DOM 提交和布局绘制成本也降低。",
      },
    ],
    relatedQuestionIds: [
      "react-render-performance",
      "react-memo-invalid-cases",
    ],
  },
  {
    id: "engineering-webpack-vite-difference",
    title: "Webpack 和 Vite 在开发期和生产期的差异是什么",
    summary: "考察 bundle-first、原生 ESM、依赖预构建和生产打包取舍。",
    shortAnswer: "考察 bundle-first、原生 ESM、依赖预构建和生产打包取舍。",
    category: "engineering",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Webpack",
      "Vite",
      "ESM",
      "构建工具",
    ],
    interviewerFocus: [
      "是否理解 Webpack 开发期通常先构建依赖图",
      "是否知道 Vite 开发期利用浏览器原生 ESM",
      "是否能说明生产构建仍需要打包优化",
    ],
    answer: "Webpack 更典型的是 bundle-first 思路，开发启动时需要分析模块图并产出可运行 bundle，项目变大后冷启动和热更新成本会明显增加。Vite 开发期利用浏览器原生 ESM，源码按需转换，第三方依赖用 esbuild 预构建，所以启动和 HMR 通常更快。但生产期二者都会回到打包优化，只是 Vite 默认使用 Rollup。取舍上，Webpack 生态和可定制能力很强，适合复杂历史工程；Vite 开发体验更轻，适合现代 ESM 项目，但遇到非常复杂的 legacy 插件或非标准模块也要评估迁移成本。",
    oralAnswer: "Webpack 更典型的是 bundle-first 思路，开发启动时需要分析模块图并产出可运行 bundle，项目变大后冷启动和热更新成本会明显增加。Vite 开发期利用浏览器原生 ESM，源码按需转换，第三方依赖用 esbuild 预构建，所以启动和 HMR 通常更快。但生产期二者都会回到打包优化，只是 Vite 默认使用 Rollup。取舍上，Webpack 生态和可定制能力很强，适合复杂历史工程；Vite 开发体验更轻，适合现代 ESM 项目，但遇到非常复杂的 legacy 插件或非标准模块也要评估迁移成本。",
    keyPoints: [
      "Webpack 偏 bundle-first",
      "Vite 开发期按需 ESM",
      "生产期仍要打包优化",
      "选型要看生态和迁移成本",
    ],
    followUps: [
      {
        question: "Vite 快是不是因为不打包？",
        answerHint: "开发期不整体打包源码，但依赖会预构建，生产期仍然打包。",
      },
      {
        question: "Webpack 一定比 Vite 慢吗？",
        answerHint: "不一定，具体取决于项目规模、缓存、插件和配置复杂度。",
      },
    ],
    relatedQuestionIds: [
      "engineering-vite-build",
    ],
  },
  {
    id: "engineering-build-speed-optimization",
    title: "大型前端项目构建速度慢时如何优化",
    summary: "考察缓存、并行、依赖预构建、插件成本和产物分析。",
    shortAnswer: "考察缓存、并行、依赖预构建、插件成本和产物分析。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "构建速度",
      "缓存",
      "构建优化",
      "CI",
    ],
    interviewerFocus: [
      "是否会先度量构建耗时分布",
      "是否能从缓存、并行和插件成本优化",
      "是否考虑本地和 CI 环境差异",
    ],
    answer: "构建慢要先量化，而不是盲目换工具。我会拆分冷启动、依赖安装、类型检查、lint、测试、打包、压缩、上传产物各阶段耗时，再看本地和 CI 是否瓶颈不同。优化手段包括开启构建缓存，拆分 typecheck 和打包，减少 Babel/TS 转换范围，优化插件顺序，避免重复压缩和重复分析，利用 pnpm 或 CI cache 缓存依赖。系统方案上要定义验证方式：优化前后同机器、同分支、多次取中位数，并观察产物体积和 source map 是否受影响。",
    oralAnswer: "构建慢要先量化，而不是盲目换工具。我会拆分冷启动、依赖安装、类型检查、lint、测试、打包、压缩、上传产物各阶段耗时，再看本地和 CI 是否瓶颈不同。优化手段包括开启构建缓存，拆分 typecheck 和打包，减少 Babel/TS 转换范围，优化插件顺序，避免重复压缩和重复分析，利用 pnpm 或 CI cache 缓存依赖。系统方案上要定义验证方式：优化前后同机器、同分支、多次取中位数，并观察产物体积和 source map 是否受影响。",
    keyPoints: [
      "先度量各阶段耗时",
      "使用缓存和并行",
      "减少重复转换和压缩",
      "用同环境对比验证",
    ],
    followUps: [
      {
        question: "为什么不能只看一次构建结果？",
        answerHint: "构建受机器、缓存和网络波动影响，应多次取稳定指标。",
      },
      {
        question: "把所有检查并行是否一定更好？",
        answerHint: "不一定，CPU 和内存竞争可能导致整体更慢，需要按资源瓶颈调整。",
      },
    ],
    relatedQuestionIds: [
      "engineering-vite-build",
    ],
  },
  {
    id: "engineering-monorepo-boundary",
    title: "Monorepo 中如何设计包边界和依赖治理",
    summary: "考察 workspace、包职责、依赖方向、版本策略和构建缓存。",
    shortAnswer: "考察 workspace、包职责、依赖方向、版本策略和构建缓存。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Monorepo",
      "依赖治理",
      "workspace",
      "包边界",
    ],
    interviewerFocus: [
      "是否能按职责拆分 app、ui、utils、types",
      "是否考虑依赖方向和循环依赖",
      "是否知道构建缓存和影响范围分析的价值",
    ],
    answer: "Monorepo 的关键不是把仓库合在一起，而是把包边界和依赖方向设计清楚。常见拆法是 apps 放业务应用，packages 放 UI、工具、类型、配置和领域 SDK。依赖方向要单向，比如 app 依赖 ui 和 utils，底层包不反向依赖业务 app；公共类型包也要谨慎，避免变成所有包互相耦合的中心。工程上要配合 workspace、changeset、构建缓存和影响范围分析，只构建受影响包。验证方式包括依赖图检查、循环依赖检查、CI 增量构建耗时和包发布正确性。",
    oralAnswer: "Monorepo 的关键不是把仓库合在一起，而是把包边界和依赖方向设计清楚。常见拆法是 apps 放业务应用，packages 放 UI、工具、类型、配置和领域 SDK。依赖方向要单向，比如 app 依赖 ui 和 utils，底层包不反向依赖业务 app；公共类型包也要谨慎，避免变成所有包互相耦合的中心。工程上要配合 workspace、changeset、构建缓存和影响范围分析，只构建受影响包。验证方式包括依赖图检查、循环依赖检查、CI 增量构建耗时和包发布正确性。",
    keyPoints: [
      "Monorepo 核心是包边界",
      "依赖方向要单向",
      "需要循环依赖治理",
      "增量构建依赖影响分析",
    ],
    followUps: [
      {
        question: "Monorepo 一定适合多团队吗？",
        answerHint: "不一定，权限、发布节奏和所有权不清时会增加协作成本。",
      },
      {
        question: "公共 utils 包为什么容易失控？",
        answerHint: "职责太泛会吸纳无关逻辑，导致依赖膨胀和变更影响面扩大。",
      },
    ],
    relatedQuestionIds: [
      "ts-generic-business-component",
    ],
  },
  {
    id: "engineering-pnpm-workspace",
    title: "pnpm workspace 在前端工程中解决了哪些问题",
    summary: "考察依赖复用、软链接、幽灵依赖、workspace 协议和脚本编排。",
    shortAnswer: "考察依赖复用、软链接、幽灵依赖、workspace 协议和脚本编排。",
    category: "engineering",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "pnpm",
      "workspace",
      "依赖管理",
      "monorepo",
    ],
    interviewerFocus: [
      "是否理解 pnpm 的内容寻址存储和软链接机制",
      "是否知道它能暴露幽灵依赖问题",
      "是否能说明 workspace 协议的包引用方式",
    ],
    answer: "pnpm workspace 常用于 monorepo 依赖管理。pnpm 通过内容寻址存储复用依赖，再用硬链接和软链接组织 node_modules，安装速度和磁盘占用通常更好；同时它不像传统扁平 node_modules 那样容易让包访问未声明依赖，所以能暴露幽灵依赖。workspace 协议可以让内部包用 workspace:* 互相引用，保证本地开发时链接到源码包。落地时还要设计脚本编排，比如按依赖拓扑执行 build、test、lint，并在 CI 中缓存 pnpm store。",
    oralAnswer: "pnpm workspace 常用于 monorepo 依赖管理。pnpm 通过内容寻址存储复用依赖，再用硬链接和软链接组织 node_modules，安装速度和磁盘占用通常更好；同时它不像传统扁平 node_modules 那样容易让包访问未声明依赖，所以能暴露幽灵依赖。workspace 协议可以让内部包用 workspace:* 互相引用，保证本地开发时链接到源码包。落地时还要设计脚本编排，比如按依赖拓扑执行 build、test、lint，并在 CI 中缓存 pnpm store。",
    keyPoints: [
      "内容寻址存储复用依赖",
      "能减少幽灵依赖",
      "workspace 协议管理内部包",
      "CI 可缓存 pnpm store",
    ],
    followUps: [
      {
        question: "幽灵依赖为什么危险？",
        answerHint: "代码使用了未声明依赖，换环境或依赖升级后可能突然失败。",
      },
      {
        question: "pnpm workspace 是否等于完整 monorepo 方案？",
        answerHint: "不是，它解决依赖和包链接，还需要任务编排、版本发布和权限治理。",
      },
    ],
    relatedQuestionIds: [
      "engineering-monorepo-boundary",
    ],
  },
  {
    id: "engineering-code-splitting-strategy",
    title: "前端代码分割应该如何按路由和业务场景设计",
    summary: "考察路由分割、公共包拆分、缓存命中和请求数量取舍。",
    shortAnswer: "考察路由分割、公共包拆分、缓存命中和请求数量取舍。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "代码分割",
      "bundle",
      "缓存",
      "路由",
    ],
    interviewerFocus: [
      "是否知道代码分割目标是减少首屏关键 JS",
      "是否能平衡 chunk 数量和缓存命中",
      "是否考虑预加载和用户路径",
    ],
    answer: "代码分割不是 chunk 越多越好，目标是让用户当前路径只下载必要代码，同时让稳定代码获得更好缓存。常见策略是路由级分割，再对特别重的图表、编辑器、低频弹窗做组件级动态导入；React、基础组件库、工具库这类公共依赖要看变化频率和复用范围，避免拆出过多小包导致请求开销和瀑布。验证方式要看首屏 JS 体积、请求数量、缓存命中、路由切换耗时和错误率。对高概率下一页可以做 prefetch，但不能把所有未来资源都提前加载。",
    oralAnswer: "代码分割不是 chunk 越多越好，目标是让用户当前路径只下载必要代码，同时让稳定代码获得更好缓存。常见策略是路由级分割，再对特别重的图表、编辑器、低频弹窗做组件级动态导入；React、基础组件库、工具库这类公共依赖要看变化频率和复用范围，避免拆出过多小包导致请求开销和瀑布。验证方式要看首屏 JS 体积、请求数量、缓存命中、路由切换耗时和错误率。对高概率下一页可以做 prefetch，但不能把所有未来资源都提前加载。",
    keyPoints: [
      "减少当前路径关键 JS",
      "路由和重组件适合分割",
      "chunk 数量要克制",
      "用体积、请求和切换耗时验证",
    ],
    followUps: [
      {
        question: "公共依赖都拆 vendor 包好吗？",
        answerHint: "不一定，过大的 vendor 会影响首屏，过细又会增加请求和缓存碎片。",
      },
      {
        question: "prefetch 和 preload 在代码分割里如何取舍？",
        answerHint: "preload 用于当前页面关键资源，prefetch 用于未来可能需要的低优先级资源。",
      },
    ],
    relatedQuestionIds: [
      "performance-first-screen-optimization",
    ],
  },
  {
    id: "engineering-ci-quality-gate",
    title: "CI/CD 质量门禁应该覆盖哪些前端检查",
    summary: "考察 lint、类型、测试、构建、体积、安全和发布阻断策略。",
    shortAnswer: "考察 lint、类型、测试、构建、体积、安全和发布阻断策略。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "CI/CD",
      "质量门禁",
      "自动化",
      "发布",
    ],
    interviewerFocus: [
      "是否能分层设计提交、合并和发布检查",
      "是否覆盖类型、测试、构建和安全风险",
      "是否考虑门禁速度和阻断策略",
    ],
    answer: "前端质量门禁要分层，不能所有检查都压到一个节点。提交前可以做 format、lint staged；PR 阶段跑 lint、typecheck、单测、关键组件测试、构建和 bundle size 检查；发布前再跑 e2e、产物完整性、source map 上传、安全扫描和灰度配置校验。取舍上，门禁越多越稳但越慢，所以要把快检查前置，慢检查并行或按影响范围触发。验证方式是看门禁拦截了哪些真实问题、平均耗时、误报率和紧急发布时的兜底流程。",
    oralAnswer: "前端质量门禁要分层，不能所有检查都压到一个节点。提交前可以做 format、lint staged；PR 阶段跑 lint、typecheck、单测、关键组件测试、构建和 bundle size 检查；发布前再跑 e2e、产物完整性、source map 上传、安全扫描和灰度配置校验。取舍上，门禁越多越稳但越慢，所以要把快检查前置，慢检查并行或按影响范围触发。验证方式是看门禁拦截了哪些真实问题、平均耗时、误报率和紧急发布时的兜底流程。",
    keyPoints: [
      "门禁按阶段分层",
      "覆盖类型测试构建体积安全",
      "快检查前置慢检查并行",
      "关注耗时和误报率",
    ],
    followUps: [
      {
        question: "bundle size 超标是否一定阻断发布？",
        answerHint: "应看阈值和影响范围，核心路径明显变大可阻断，非关键包可预警。",
      },
      {
        question: "CI 太慢如何优化？",
        answerHint: "用缓存、增量检查、任务并行和按变更范围触发。",
      },
    ],
    relatedQuestionIds: [
      "engineering-build-speed-optimization",
    ],
  },
  {
    id: "engineering-gray-release-rollback",
    title: "前端灰度发布和快速回滚机制如何设计",
    summary: "考察灰度规则、配置下发、监控指标、回滚和缓存一致性。",
    shortAnswer: "考察灰度规则、配置下发、监控指标、回滚和缓存一致性。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "灰度发布",
      "回滚",
      "发布策略",
      "监控",
    ],
    interviewerFocus: [
      "是否能设计按用户、租户、地区或比例灰度",
      "是否考虑前端静态资源和配置一致性",
      "是否用监控指标决定扩大或回滚",
    ],
    answer: "前端灰度通常有两类：资源版本灰度和功能开关灰度。资源版本灰度要确保 HTML、JS、CSS、source map 和后端接口兼容，避免用户拿到旧 HTML 引新资源或新资源调旧接口；功能灰度则通过配置服务按用户、租户、地区或比例下发。系统方案上要有明确指标，比如错误率、白屏率、接口失败率、关键转化和性能指标，达到阈值自动暂停或回滚。回滚要尽量切回上一稳定版本，并处理 CDN 缓存、入口 HTML 缓存和配置缓存。",
    oralAnswer: "前端灰度通常有两类：资源版本灰度和功能开关灰度。资源版本灰度要确保 HTML、JS、CSS、source map 和后端接口兼容，避免用户拿到旧 HTML 引新资源或新资源调旧接口；功能灰度则通过配置服务按用户、租户、地区或比例下发。系统方案上要有明确指标，比如错误率、白屏率、接口失败率、关键转化和性能指标，达到阈值自动暂停或回滚。回滚要尽量切回上一稳定版本，并处理 CDN 缓存、入口 HTML 缓存和配置缓存。",
    keyPoints: [
      "区分资源灰度和功能灰度",
      "保证资源与接口兼容",
      "用监控指标驱动扩大或回滚",
      "回滚要处理缓存一致性",
    ],
    followUps: [
      {
        question: "为什么前端回滚不只是重新发一次旧包？",
        answerHint: "还要考虑 HTML 缓存、CDN、配置、接口兼容和用户已加载资源。",
      },
      {
        question: "功能开关会带来什么工程成本？",
        answerHint: "开关生命周期、组合状态和废弃清理都需要治理。",
      },
    ],
    relatedQuestionIds: [
      "engineering-ci-quality-gate",
    ],
  },
  {
    id: "engineering-source-map-security",
    title: "线上 Source Map 如何兼顾错误定位和源码安全",
    summary: "考察 source map 生成、上传、访问控制、错误平台和清理策略。",
    shortAnswer: "考察 source map 生成、上传、访问控制、错误平台和清理策略。",
    category: "engineering",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Source Map",
      "错误定位",
      "安全",
      "发布",
    ],
    interviewerFocus: [
      "是否知道 source map 暴露源码风险",
      "是否能设计上传到错误平台而非公开访问",
      "是否考虑版本匹配和清理策略",
    ],
    answer: "线上 source map 的价值是把压缩后的错误栈还原到源码位置，但直接公开在 CDN 上会暴露源码和业务逻辑。更稳的做法是构建时生成 hidden source map 或不在产物中暴露 sourceMappingURL，把 map 上传到 Sentry 这类错误平台或内部服务，并用 release/version 精确匹配。访问上要有权限控制，过期版本要定期清理。验证方式是发布后主动触发测试错误，确认错误平台能还原文件、行列和 commit，同时线上用户无法直接下载 source map。",
    oralAnswer: "线上 source map 的价值是把压缩后的错误栈还原到源码位置，但直接公开在 CDN 上会暴露源码和业务逻辑。更稳的做法是构建时生成 hidden source map 或不在产物中暴露 sourceMappingURL，把 map 上传到 Sentry 这类错误平台或内部服务，并用 release/version 精确匹配。访问上要有权限控制，过期版本要定期清理。验证方式是发布后主动触发测试错误，确认错误平台能还原文件、行列和 commit，同时线上用户无法直接下载 source map。",
    keyPoints: [
      "source map 有源码泄露风险",
      "推荐上传错误平台",
      "release 版本必须匹配",
      "发布后要验证还原效果",
    ],
    followUps: [
      {
        question: "hidden source map 是什么思路？",
        answerHint: "生成 map 供平台使用，但不在 JS 文件里暴露 sourceMappingURL。",
      },
      {
        question: "source map 和压缩混淆有什么关系？",
        answerHint: "压缩混淆让线上代码难读，source map 用来还原调试信息。",
      },
    ],
    relatedQuestionIds: [
      "engineering-ci-quality-gate",
    ],
  },
  {
    id: "engineering-bundle-size-governance",
    title: "大包治理应该如何定位、拆分和防止反弹",
    summary: "考察 bundle 分析、依赖替换、按需加载、预算和 CI 防退化。",
    shortAnswer: "考察 bundle 分析、依赖替换、按需加载、预算和 CI 防退化。",
    category: "engineering",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "大包治理",
      "bundle",
      "依赖分析",
      "体积预算",
    ],
    interviewerFocus: [
      "是否会用分析工具找出体积来源",
      "是否能区分业务代码和第三方依赖治理策略",
      "是否有 CI 体积预算防止反弹",
    ],
    answer: "大包治理先要定位来源，用 bundle analyzer 看首屏包、异步包和第三方依赖占比。业务代码可以通过路由分割、组件懒加载和删除死代码处理；第三方依赖要看是否全量引入、是否有更小替代、是否支持 tree shaking，比如日期库、图表库、编辑器最常见。治理不是一次性压缩完就结束，必须在 CI 里设置体积预算和 diff 报告，PR 阶段让新增体积透明。验证上看 gzip/brotli 后体积、首屏 JS 执行时间、缓存命中和真实首屏指标是否改善。",
    oralAnswer: "大包治理先要定位来源，用 bundle analyzer 看首屏包、异步包和第三方依赖占比。业务代码可以通过路由分割、组件懒加载和删除死代码处理；第三方依赖要看是否全量引入、是否有更小替代、是否支持 tree shaking，比如日期库、图表库、编辑器最常见。治理不是一次性压缩完就结束，必须在 CI 里设置体积预算和 diff 报告，PR 阶段让新增体积透明。验证上看 gzip/brotli 后体积、首屏 JS 执行时间、缓存命中和真实首屏指标是否改善。",
    keyPoints: [
      "先分析体积来源",
      "业务代码和依赖分别治理",
      "按需加载重依赖",
      "CI 体积预算防反弹",
    ],
    followUps: [
      {
        question: "tree shaking 失效常见原因是什么？",
        answerHint: "模块格式、sideEffects 标记、动态导入方式和库本身打包方式都可能影响。",
      },
      {
        question: "包体积变小一定代表性能变好吗？",
        answerHint: "不一定，还要看解析执行时间、缓存、请求数量和用户真实指标。",
      },
    ],
    relatedQuestionIds: [
      "engineering-code-splitting-strategy",
      "performance-first-screen-optimization",
    ],
  },
  {
    id: "browser-cache-strategy-detail",
    title: "浏览器缓存中强缓存和协商缓存如何配合",
    summary: "考察 Cache-Control、ETag、Last-Modified、资源指纹和更新策略。",
    shortAnswer: "考察 Cache-Control、ETag、Last-Modified、资源指纹和更新策略。",
    category: "browser",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "浏览器缓存",
      "强缓存",
      "协商缓存",
      "ETag",
    ],
    interviewerFocus: [
      "是否能区分强缓存和协商缓存命中流程",
      "是否知道 HTML 和 hash 静态资源缓存策略不同",
      "是否能说明缓存更新和回滚风险",
    ],
    answer: "浏览器缓存我会分成两层说：强缓存命中时浏览器直接用本地资源，不发请求，常见字段是 Cache-Control 的 max-age、immutable；强缓存过期后进入协商缓存，通过 ETag 或 Last-Modified 问服务端资源是否变化，没变返回 304。工程上 HTML 入口通常不能长期强缓存，因为它决定加载哪些最新资源；带 hash 的 JS、CSS、图片可以长期缓存，因为内容变了文件名也会变。验证时看 Network 面板状态码、from disk cache、304，以及发布后 HTML 是否能引用到最新资源。",
    oralAnswer: "浏览器缓存我会分成两层说：强缓存命中时浏览器直接用本地资源，不发请求，常见字段是 Cache-Control 的 max-age、immutable；强缓存过期后进入协商缓存，通过 ETag 或 Last-Modified 问服务端资源是否变化，没变返回 304。工程上 HTML 入口通常不能长期强缓存，因为它决定加载哪些最新资源；带 hash 的 JS、CSS、图片可以长期缓存，因为内容变了文件名也会变。验证时看 Network 面板状态码、from disk cache、304，以及发布后 HTML 是否能引用到最新资源。",
    keyPoints: [
      "强缓存不发请求",
      "协商缓存用 304 降低传输",
      "HTML 不宜长期强缓存",
      "hash 资源适合长期缓存",
    ],
    followUps: [
      {
        question: "ETag 和 Last-Modified 哪个优先级更高？",
        answerHint: "通常 ETag 精度更高，服务端可优先使用 ETag 判断内容是否变化。",
      },
      {
        question: "为什么资源 hash 能支持长期缓存？",
        answerHint: "内容变化会生成新文件名，旧缓存不会影响新版本加载。",
      },
    ],
  },
  {
    id: "browser-http-versions-difference",
    title: "HTTP/1.1、HTTP/2、HTTP/3 对前端性能有什么影响",
    summary: "考察连接复用、多路复用、队头阻塞、QUIC 和资源加载策略。",
    shortAnswer: "考察连接复用、多路复用、队头阻塞、QUIC 和资源加载策略。",
    category: "browser",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "HTTP/1.1",
      "HTTP/2",
      "HTTP/3",
      "QUIC",
    ],
    interviewerFocus: [
      "是否理解 HTTP/1.1 的连接数量和队头阻塞问题",
      "是否知道 HTTP/2 多路复用改善资源并发",
      "是否能说明 HTTP/3 基于 QUIC 的优势和限制",
    ],
    answer: "HTTP/1.1 下浏览器对同域连接数有限，请求多时会排队，所以过去会做域名分片、雪碧图、合并文件。HTTP/2 支持单连接多路复用和头部压缩，很多小资源可以并发传输，过度合并反而可能降低缓存效率。但 HTTP/2 仍跑在 TCP 上，一个丢包可能影响连接内多个流。HTTP/3 基于 QUIC/UDP，连接建立更快，弱网丢包下队头阻塞更少。前端策略上要结合协议调整资源拆分、preload 和 CDN 支持，不能拿 HTTP/1.1 的经验直接套到 HTTP/2/3。",
    oralAnswer: "HTTP/1.1 下浏览器对同域连接数有限，请求多时会排队，所以过去会做域名分片、雪碧图、合并文件。HTTP/2 支持单连接多路复用和头部压缩，很多小资源可以并发传输，过度合并反而可能降低缓存效率。但 HTTP/2 仍跑在 TCP 上，一个丢包可能影响连接内多个流。HTTP/3 基于 QUIC/UDP，连接建立更快，弱网丢包下队头阻塞更少。前端策略上要结合协议调整资源拆分、preload 和 CDN 支持，不能拿 HTTP/1.1 的经验直接套到 HTTP/2/3。",
    keyPoints: [
      "HTTP/1.1 连接受限",
      "HTTP/2 支持多路复用",
      "HTTP/3 基于 QUIC",
      "协议会影响资源拆分策略",
    ],
    followUps: [
      {
        question: "HTTP/2 下还需要雪碧图吗？",
        answerHint: "通常必要性降低，但图标体系、缓存和渲染方式仍需具体评估。",
      },
      {
        question: "HTTP/3 一定比 HTTP/2 快吗？",
        answerHint: "不一定，取决于网络、服务端、CDN、握手和实现质量。",
      },
    ],
    relatedQuestionIds: [
      "performance-first-screen-optimization",
    ],
  },
  {
    id: "browser-https-handshake-process",
    title: "HTTPS 握手过程对首屏性能有什么影响",
    summary: "考察 TLS 握手、证书校验、连接复用和预连接优化。",
    shortAnswer: "考察 TLS 握手、证书校验、连接复用和预连接优化。",
    category: "browser",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "HTTPS",
      "TLS",
      "握手",
      "preconnect",
    ],
    interviewerFocus: [
      "是否能描述 HTTPS 在 HTTP 前多了 TLS 协商",
      "是否知道证书校验和密钥协商会增加连接成本",
      "是否能用连接复用和预连接优化关键域名",
    ],
    answer: "HTTPS 在真正发 HTTP 请求前要先完成 TCP 连接和 TLS 握手，握手里会做协议版本协商、证书校验和密钥协商，所以首个请求会比纯 HTTP 多一些往返成本。现代 TLS 1.3 已经减少了握手往返，HTTP/2/3 连接复用也能降低后续请求成本。前端能做的是减少关键路径上的新域名数量，对首屏必需的 CDN、API 域名使用 preconnect 或 dns-prefetch，但不能滥用，否则会浪费连接资源。验证时看瀑布图里的 DNS、Connect、SSL 阶段耗时。",
    oralAnswer: "HTTPS 在真正发 HTTP 请求前要先完成 TCP 连接和 TLS 握手，握手里会做协议版本协商、证书校验和密钥协商，所以首个请求会比纯 HTTP 多一些往返成本。现代 TLS 1.3 已经减少了握手往返，HTTP/2/3 连接复用也能降低后续请求成本。前端能做的是减少关键路径上的新域名数量，对首屏必需的 CDN、API 域名使用 preconnect 或 dns-prefetch，但不能滥用，否则会浪费连接资源。验证时看瀑布图里的 DNS、Connect、SSL 阶段耗时。",
    keyPoints: [
      "HTTPS 多了 TLS 握手",
      "TLS 1.3 降低往返成本",
      "连接复用能摊薄成本",
      "关键域名可预连接",
    ],
    followUps: [
      {
        question: "preconnect 和 dns-prefetch 有什么区别？",
        answerHint: "dns-prefetch 只解析 DNS，preconnect 会提前建立连接和 TLS。",
      },
      {
        question: "为什么第三方域名太多会拖慢首屏？",
        answerHint: "每个新域名都可能产生 DNS、连接和 TLS 成本，还竞争带宽和主线程。",
      },
    ],
    relatedQuestionIds: [
      "browser-http-versions-difference",
    ],
  },
  {
    id: "browser-cors-credentials",
    title: "跨域请求中 CORS 和 credentials 如何配合",
    summary: "考察同源策略、预检请求、凭证携带和服务端响应头。",
    shortAnswer: "考察同源策略、预检请求、凭证携带和服务端响应头。",
    category: "browser",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "跨域",
      "CORS",
      "credentials",
      "预检请求",
    ],
    interviewerFocus: [
      "是否理解跨域是浏览器安全策略",
      "是否知道复杂请求会触发预检",
      "是否能说明携带 Cookie 时响应头的限制",
    ],
    answer: "跨域本质是浏览器同源策略限制脚本读取不同源响应，CORS 是服务端声明允许哪些源访问。简单请求满足条件时浏览器直接发请求，复杂请求会先发 OPTIONS 预检，确认方法和头是否被允许。若前端要携带 Cookie，需要 fetch 设置 credentials，服务端也必须返回 Access-Control-Allow-Credentials: true，并且 Allow-Origin 不能是通配符 *，要明确具体来源。排查跨域时要看实际请求和预检请求的响应头，而不是只看后端接口是否返回 200。",
    oralAnswer: "跨域本质是浏览器同源策略限制脚本读取不同源响应，CORS 是服务端声明允许哪些源访问。简单请求满足条件时浏览器直接发请求，复杂请求会先发 OPTIONS 预检，确认方法和头是否被允许。若前端要携带 Cookie，需要 fetch 设置 credentials，服务端也必须返回 Access-Control-Allow-Credentials: true，并且 Allow-Origin 不能是通配符 *，要明确具体来源。排查跨域时要看实际请求和预检请求的响应头，而不是只看后端接口是否返回 200。",
    keyPoints: [
      "CORS 是服务端授权跨域读取",
      "复杂请求会预检",
      "携带凭证需要双端配置",
      "Allow-Origin 不能用 * 搭配凭证",
    ],
    followUps: [
      {
        question: "跨域请求发出去了为什么前端还是报错？",
        answerHint: "请求可能成功到达服务端，但浏览器因 CORS 响应头不合法拦截了读取。",
      },
      {
        question: "如何减少预检请求影响？",
        answerHint: "可控制方法和自定义头，但不能为了省预检牺牲安全和语义。",
      },
    ],
  },
  {
    id: "browser-storage-cookie-local-session",
    title: "Cookie、localStorage、sessionStorage 如何取舍",
    summary: "考察存储生命周期、容量、请求携带、安全属性和使用场景。",
    shortAnswer: "考察存储生命周期、容量、请求携带、安全属性和使用场景。",
    category: "browser",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Cookie",
      "localStorage",
      "sessionStorage",
      "存储",
    ],
    interviewerFocus: [
      "是否能区分三者生命周期和容量",
      "是否知道 Cookie 会随请求携带",
      "是否理解敏感信息存储风险",
    ],
    answer: "Cookie 适合需要随请求自动携带的小数据，比如会话标识，但要设置 HttpOnly、Secure、SameSite 等安全属性，避免 XSS 读取和 CSRF 风险。localStorage 容量较大、持久保存，适合非敏感偏好配置，但它能被脚本读取，不适合放 token 等高敏感信息。sessionStorage 生命周期在页面会话内，适合临时状态。取舍时我会先问数据是否需要发给服务端、是否敏感、是否跨 tab 共享、过期策略是什么。安全上，越敏感的数据越不应该暴露给 JS。",
    oralAnswer: "Cookie 适合需要随请求自动携带的小数据，比如会话标识，但要设置 HttpOnly、Secure、SameSite 等安全属性，避免 XSS 读取和 CSRF 风险。localStorage 容量较大、持久保存，适合非敏感偏好配置，但它能被脚本读取，不适合放 token 等高敏感信息。sessionStorage 生命周期在页面会话内，适合临时状态。取舍时我会先问数据是否需要发给服务端、是否敏感、是否跨 tab 共享、过期策略是什么。安全上，越敏感的数据越不应该暴露给 JS。",
    keyPoints: [
      "Cookie 会随请求携带",
      "localStorage 持久且可被 JS 读取",
      "sessionStorage 会话级",
      "敏感信息要谨慎暴露",
    ],
    followUps: [
      {
        question: "为什么不推荐把长期 token 放 localStorage？",
        answerHint: "一旦发生 XSS，脚本可以直接读取并外传 token。",
      },
      {
        question: "Cookie 容量为什么不宜太大？",
        answerHint: "Cookie 会随请求发送，过大会增加每次请求负担。",
      },
    ],
    relatedQuestionIds: [
      "browser-samesite-cookie-security",
    ],
  },
  {
    id: "browser-samesite-cookie-security",
    title: "SameSite Cookie 如何降低 CSRF 风险",
    summary: "考察 Strict、Lax、None 语义、跨站请求和登录态保护。",
    shortAnswer: "考察 Strict、Lax、None 语义、跨站请求和登录态保护。",
    category: "browser",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "SameSite",
      "Cookie",
      "CSRF",
      "安全",
    ],
    interviewerFocus: [
      "是否理解 SameSite 控制跨站请求携带 Cookie",
      "是否能区分 Strict、Lax、None",
      "是否知道 None 必须配合 Secure",
    ],
    answer: "SameSite 是 Cookie 的跨站携带策略，用来降低 CSRF 风险。Strict 最严格，跨站场景基本不带 Cookie，安全但可能影响从外部链接进入后的登录体验；Lax 是常用折中，顶级导航 GET 可能带 Cookie，但表单 POST、图片、iframe 等跨站子请求通常不带；None 表示允许跨站携带，但必须配合 Secure。它不能替代所有 CSRF 防护，关键操作仍建议结合 CSRF Token、Origin/Referer 校验和正确的请求方法。",
    oralAnswer: "SameSite 是 Cookie 的跨站携带策略，用来降低 CSRF 风险。Strict 最严格，跨站场景基本不带 Cookie，安全但可能影响从外部链接进入后的登录体验；Lax 是常用折中，顶级导航 GET 可能带 Cookie，但表单 POST、图片、iframe 等跨站子请求通常不带；None 表示允许跨站携带，但必须配合 Secure。它不能替代所有 CSRF 防护，关键操作仍建议结合 CSRF Token、Origin/Referer 校验和正确的请求方法。",
    keyPoints: [
      "SameSite 控制跨站 Cookie",
      "Strict 安全但体验限制多",
      "Lax 是常用折中",
      "None 必须 Secure",
    ],
    followUps: [
      {
        question: "SameSite=Lax 能完全防 CSRF 吗？",
        answerHint: "不能完全覆盖所有场景，关键操作仍需要 Token 或来源校验。",
      },
      {
        question: "第三方登录为什么常需要 SameSite=None？",
        answerHint: "跨站身份流程可能需要第三方上下文携带 Cookie，因此要明确允许并使用 Secure。",
      },
    ],
  },
  {
    id: "browser-render-pipeline-detail",
    title: "浏览器渲染流程中 DOM、CSSOM、Layout、Paint 如何协作",
    summary: "考察关键渲染路径、样式计算、布局、绘制和合成。",
    shortAnswer: "考察关键渲染路径、样式计算、布局、绘制和合成。",
    category: "browser",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "渲染流程",
      "DOM",
      "CSSOM",
      "Layout",
    ],
    interviewerFocus: [
      "是否能按阶段描述浏览器渲染流程",
      "是否知道 JS 和 CSS 如何阻塞渲染",
      "是否能说明 layout、paint、composite 的性能差异",
    ],
    answer: "浏览器拿到 HTML 后解析成 DOM，CSS 解析成 CSSOM，两者结合生成渲染树。之后进行样式计算和布局，确定每个元素的位置和尺寸，再绘制成图层，最后合成到屏幕上。JavaScript 可能阻塞 HTML 解析，CSSOM 没准备好也会影响渲染树生成。性能上，修改几何属性会触发布局，修改颜色背景可能只触发绘制，transform 和 opacity 往往可以走合成，成本更低。优化时要减少强制同步布局、批量读写 DOM，并优先使用合成友好的动画属性。",
    oralAnswer: "浏览器拿到 HTML 后解析成 DOM，CSS 解析成 CSSOM，两者结合生成渲染树。之后进行样式计算和布局，确定每个元素的位置和尺寸，再绘制成图层，最后合成到屏幕上。JavaScript 可能阻塞 HTML 解析，CSSOM 没准备好也会影响渲染树生成。性能上，修改几何属性会触发布局，修改颜色背景可能只触发绘制，transform 和 opacity 往往可以走合成，成本更低。优化时要减少强制同步布局、批量读写 DOM，并优先使用合成友好的动画属性。",
    keyPoints: [
      "DOM 和 CSSOM 生成渲染树",
      "布局决定位置尺寸",
      "绘制生成像素",
      "合成属性动画成本更低",
    ],
    followUps: [
      {
        question: "什么是强制同步布局？",
        answerHint: "写入样式后立刻读取布局信息，浏览器被迫提前计算 layout。",
      },
      {
        question: "为什么 transform 动画通常更流畅？",
        answerHint: "它通常不触发布局和绘制，可交给合成线程处理。",
      },
    ],
    relatedQuestionIds: [
      "browser-render-pipeline",
      "performance-page-jank-debugging",
    ],
  },
  {
    id: "handwriting-debounce",
    title: "手写 debounce，支持立即执行和取消",
    summary: "考察高频事件收敛、this/参数保存、leading 和 cancel。",
    shortAnswer: "考察高频事件收敛、this/参数保存、leading 和 cancel。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "debounce",
      "高频事件",
      "定时器",
    ],
    interviewerFocus: [
      "是否理解防抖只在安静窗口后执行",
      "是否处理 this 和参数",
      "是否支持取消和立即执行",
    ],
    answer: "debounce 的核心是把一段时间内连续触发的调用合并成最后一次，常用于搜索输入、窗口 resize 等场景。实现时每次调用都清理旧定时器，再设置新定时器；如果需要 leading，就在没有定时器时先执行一次，后续等待窗口结束。复杂度上，每次调用都是 O(1)，空间也是一个 timer。边界要注意 this、参数、取消、以及 leading 和 trailing 的组合语义。",
    oralAnswer: "debounce 的核心是把一段时间内连续触发的调用合并成最后一次，常用于搜索输入、窗口 resize 等场景。实现时每次调用都清理旧定时器，再设置新定时器；如果需要 leading，就在没有定时器时先执行一次，后续等待窗口结束。复杂度上，每次调用都是 O(1)，空间也是一个 timer。边界要注意 this、参数、取消、以及 leading 和 trailing 的组合语义。",
    keyPoints: [
      "连续触发只保留最后一次",
      "每次调用重置定时器",
      "保留 this 和参数",
      "cancel 清理待执行任务",
    ],
    followUps: [
      {
        question: "debounce 和 throttle 有什么区别？",
        answerHint: "debounce 等停止后执行，throttle 保证固定间隔最多执行一次。",
      },
      {
        question: "leading 为 true 时还要不要 trailing？",
        answerHint: "看业务语义，可只立即执行，也可最后再补一次。",
      },
    ],
    code: `function debounce(fn, wait, options = {}) {
  // 用一个 timer 代表当前等待窗口，连续触发时不断重置它。
  let timer = null;
  const { leading = false } = options;

  function debounced(...args) {
    // 保存调用现场，保证延迟执行时 this 和参数仍然正确。
    const context = this;
    const shouldCallNow = leading && timer === null;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      // 非 leading 模式下，只在用户停止触发后执行最后一次。
      if (!leading) fn.apply(context, args);
    }, wait);

    if (shouldCallNow) fn.apply(context, args);
  }

  debounced.cancel = () => {
    if (timer) clearTimeout(timer);
    timer = null;
  };

  return debounced;
}`,
  },
  {
    id: "handwriting-throttle",
    title: "手写 throttle，支持最后一次补偿执行",
    summary: "考察固定频率执行、时间戳、定时器和 trailing 补偿。",
    shortAnswer: "考察固定频率执行、时间戳、定时器和 trailing 补偿。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "throttle",
      "高频事件",
      "trailing",
    ],
    interviewerFocus: [
      "是否理解节流按固定频率执行",
      "是否处理最后一次调用",
      "是否保留 this 和参数",
    ],
    answer: "throttle 用来限制函数在一段时间内最多执行一次，适合滚动、拖拽、鼠标移动等持续高频事件。实现上可以记录上次执行时间，未到间隔就安排一个 trailing 定时器，保证最后一次输入不会丢。每次触发 O(1)，空间也是一个 timer。边界在于 leading/trailing 策略：有些场景要立刻响应，有些场景要保证结束时同步最终状态。",
    oralAnswer: "throttle 用来限制函数在一段时间内最多执行一次，适合滚动、拖拽、鼠标移动等持续高频事件。实现上可以记录上次执行时间，未到间隔就安排一个 trailing 定时器，保证最后一次输入不会丢。每次触发 O(1)，空间也是一个 timer。边界在于 leading/trailing 策略：有些场景要立刻响应，有些场景要保证结束时同步最终状态。",
    keyPoints: [
      "固定时间窗口最多执行一次",
      "时间戳判断是否立即执行",
      "trailing 保留最后一次调用",
      "适合持续高频事件",
    ],
    followUps: [
      {
        question: "为什么滚动监听常用 throttle？",
        answerHint: "滚动是持续触发，节流能控制处理频率，避免主线程被占满。",
      },
      {
        question: "只用时间戳版本有什么缺点？",
        answerHint: "最后一次调用可能丢失，导致最终状态不同步。",
      },
    ],
    code: `function throttle(fn, wait) {
  // lastTime 记录上次真正执行时间，用来判断当前是否已经过了节流窗口。
  let lastTime = 0;
  let timer = null;
  let lastArgs;
  let lastContext;

  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastTime);
    // 保留最近一次调用现场，保证 trailing 执行的是最终状态。
    lastArgs = args;
    lastContext = this;

    if (remaining <= 0) {
      if (timer) clearTimeout(timer);
      timer = null;
      lastTime = now;
      fn.apply(lastContext, lastArgs);
    } else if (!timer) {
      timer = setTimeout(() => {
        lastTime = Date.now();
        timer = null;
        fn.apply(lastContext, lastArgs);
      }, remaining);
    }
  };
}`,
  },
  {
    id: "handwriting-deep-clone",
    title: "手写 deepClone，处理循环引用、Map 和 Set",
    summary: "考察递归拷贝、WeakMap 防循环、内置对象和边界类型。",
    shortAnswer: "考察递归拷贝、WeakMap 防循环、内置对象和边界类型。",
    category: "handwriting",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "deepClone",
      "WeakMap",
      "循环引用",
    ],
    interviewerFocus: [
      "是否用 WeakMap 处理循环引用",
      "是否处理 Date、Map、Set",
      "是否理解函数和 DOM 节点边界",
    ],
    answer: "深拷贝的核心是递归复制引用类型，同时保留对象图结构。循环引用必须用 WeakMap 记录已拷贝对象，否则会无限递归；Date、RegExp、Map、Set 要按各自结构特殊处理。时间复杂度是 O(n)，n 是可达属性和集合元素数量，空间复杂度也是 O(n)。边界上，函数通常直接复用引用，DOM、类实例、不可枚举属性和 Symbol 属性是否支持要看题目要求，不能默认一个简单递归能覆盖所有场景。",
    oralAnswer: "深拷贝的核心是递归复制引用类型，同时保留对象图结构。循环引用必须用 WeakMap 记录已拷贝对象，否则会无限递归；Date、RegExp、Map、Set 要按各自结构特殊处理。时间复杂度是 O(n)，n 是可达属性和集合元素数量，空间复杂度也是 O(n)。边界上，函数通常直接复用引用，DOM、类实例、不可枚举属性和 Symbol 属性是否支持要看题目要求，不能默认一个简单递归能覆盖所有场景。",
    keyPoints: [
      "递归复制引用类型",
      "WeakMap 防循环",
      "内置集合特殊处理",
      "函数通常复用引用",
    ],
    followUps: [
      {
        question: "JSON 深拷贝有什么问题？",
        answerHint: "会丢失 undefined、函数、Symbol、Date、循环引用和原型信息。",
      },
      {
        question: "WeakMap 为什么比 Map 更适合记录访问对象？",
        answerHint: "WeakMap 键是弱引用，避免长生命周期缓存导致内存泄漏。",
      },
    ],
    code: `function deepClone(value, cache = new WeakMap()) {
  // 原始值没有引用关系，直接返回可以避免无意义递归。
  if (value === null || typeof value !== 'object') return value;
  // WeakMap 记录已克隆对象，既能处理循环引用，也能保持共享引用结构。
  if (cache.has(value)) return cache.get(value);

  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value);

  if (value instanceof Map) {
    const result = new Map();
    // 先放入缓存，再递归子项，避免 Map 内部自引用导致死循环。
    cache.set(value, result);
    value.forEach((v, k) => result.set(deepClone(k, cache), deepClone(v, cache)));
    return result;
  }

  if (value instanceof Set) {
    const result = new Set();
    cache.set(value, result);
    value.forEach((item) => result.add(deepClone(item, cache)));
    return result;
  }

  const result = Array.isArray(value) ? [] : {};
  cache.set(value, result);
  // Reflect.ownKeys 能覆盖 Symbol key，比 Object.keys 更完整。
  Reflect.ownKeys(value).forEach((key) => {
    result[key] = deepClone(value[key], cache);
  });
  return result;
}`,
  },
  {
    id: "handwriting-promise-all",
    title: "手写 Promise.all",
    summary: "考察并发执行、顺序收集、失败快速 reject 和空数组。",
    shortAnswer: "考察并发执行、顺序收集、失败快速 reject 和空数组。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Promise.all",
      "异步",
      "并发",
    ],
    interviewerFocus: [
      "是否保持结果顺序",
      "是否失败快速 reject",
      "是否处理非 Promise 值和空数组",
    ],
    answer: "Promise.all 的语义是并发等待所有任务完成，结果顺序按输入顺序，而不是完成顺序；只要任意一个失败，就立即 reject。实现时用 Promise.resolve 包一层兼容普通值，记录已完成数量，空数组要直接 resolve 空数组。时间复杂度 O(n)，空间复杂度 O(n)。边界包括重复 promise、非 promise 值、同步抛错和第一个失败后的后续结果不再影响最终状态。",
    oralAnswer: "Promise.all 的语义是并发等待所有任务完成，结果顺序按输入顺序，而不是完成顺序；只要任意一个失败，就立即 reject。实现时用 Promise.resolve 包一层兼容普通值，记录已完成数量，空数组要直接 resolve 空数组。时间复杂度 O(n)，空间复杂度 O(n)。边界包括重复 promise、非 promise 值、同步抛错和第一个失败后的后续结果不再影响最终状态。",
    keyPoints: [
      "并发启动所有任务",
      "结果按输入顺序保存",
      "任一失败快速 reject",
      "空数组 resolve []",
    ],
    followUps: [
      {
        question: "Promise.all 会限制并发数吗？",
        answerHint: "不会，它会同时订阅所有输入，限流要另写并发控制器。",
      },
      {
        question: "结果为什么要按输入顺序？",
        answerHint: "调用方依赖位置语义，不能按完成顺序返回。",
      },
    ],
    code: `function promiseAll(list) {
  return new Promise((resolve, reject) => {
    // 统一转成数组，方便处理可迭代对象并按输入下标保存结果。
    const arr = Array.from(list);
    if (arr.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(arr.length);
    let finished = 0;

    arr.forEach((item, index) => {
      // Promise.resolve 兼容普通值，同时保持 Promise.all 的并发语义。
      Promise.resolve(item).then(
        (value) => {
          results[index] = value;
          finished += 1;
          if (finished === arr.length) resolve(results);
        },
        reject,
      );
    });
  });
}`,
  },
  {
    id: "handwriting-promise-race",
    title: "手写 Promise.race",
    summary: "考察最先 settled、普通值兼容和超时控制场景。",
    shortAnswer: "考察最先 settled、普通值兼容和超时控制场景。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "Promise.race",
      "超时",
      "异步",
    ],
    interviewerFocus: [
      "是否理解最先完成或失败即决定结果",
      "是否兼容普通值",
      "是否知道空数组会保持 pending",
    ],
    answer: "Promise.race 关注第一个 settled 的输入，不管它是 fulfilled 还是 rejected，都会决定最终结果。实现上遍历输入，用 Promise.resolve 包装每个值，然后把 resolve/reject 直接传进去。时间复杂度 O(n)，空间主要是订阅回调。常见应用是请求超时：把真实请求和一个 timeout promise race。边界是空数组会一直 pending，后续其他 promise 即使完成也不会改变已确定的结果。",
    oralAnswer: "Promise.race 关注第一个 settled 的输入，不管它是 fulfilled 还是 rejected，都会决定最终结果。实现上遍历输入，用 Promise.resolve 包装每个值，然后把 resolve/reject 直接传进去。时间复杂度 O(n)，空间主要是订阅回调。常见应用是请求超时：把真实请求和一个 timeout promise race。边界是空数组会一直 pending，后续其他 promise 即使完成也不会改变已确定的结果。",
    keyPoints: [
      "第一个 settled 决定结果",
      "fulfilled 和 rejected 都算",
      "普通值也可参与",
      "空数组保持 pending",
    ],
    followUps: [
      {
        question: "race 能取消输掉的 promise 吗？",
        answerHint: "不能，取消需要 AbortController 或任务自身支持。",
      },
      {
        question: "如何用 race 实现超时？",
        answerHint: "让请求 promise 和 timeout reject promise 竞争即可。",
      },
    ],
    code: `function promiseRace(list) {
  return new Promise((resolve, reject) => {
    for (const item of list) {
      // 直接复用外层 resolve/reject，让第一个 settled 的任务决定最终状态。
      Promise.resolve(item).then(resolve, reject);
    }
  });
}`,
  },
  {
    id: "handwriting-promise-all-settled",
    title: "手写 Promise.allSettled",
    summary: "考察全量收集、状态对象、顺序保持和失败不短路。",
    shortAnswer: "考察全量收集、状态对象、顺序保持和失败不短路。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "Promise.allSettled",
      "异步",
      "错误收集",
    ],
    interviewerFocus: [
      "是否等待所有任务结束",
      "是否返回 status/value/reason",
      "是否保持输入顺序",
    ],
    answer: "allSettled 和 all 最大区别是不短路，它会等所有输入都 settled，再返回每一项的状态和值或原因。实现和 all 很像，但每个 promise 的成功和失败都写入结果数组，并增加完成计数。复杂度 O(n)，适合批量请求中希望展示部分成功、部分失败的场景。边界包括空数组直接返回空结果、普通值按 fulfilled 处理、失败原因不要吞掉而是放到 reason。",
    oralAnswer: "allSettled 和 all 最大区别是不短路，它会等所有输入都 settled，再返回每一项的状态和值或原因。实现和 all 很像，但每个 promise 的成功和失败都写入结果数组，并增加完成计数。复杂度 O(n)，适合批量请求中希望展示部分成功、部分失败的场景。边界包括空数组直接返回空结果、普通值按 fulfilled 处理、失败原因不要吞掉而是放到 reason。",
    keyPoints: [
      "不因失败短路",
      "等待所有任务 settled",
      "结果包含 status",
      "适合部分成功场景",
    ],
    followUps: [
      {
        question: "allSettled 适合替代 all 吗？",
        answerHint: "不一定。强依赖全部成功时 all 的快速失败更合适。",
      },
      {
        question: "allSettled 如何处理普通值？",
        answerHint: "用 Promise.resolve 包装后会得到 fulfilled。",
      },
    ],
    code: `function promiseAllSettled(list) {
  return new Promise((resolve) => {
    const arr = Array.from(list);
    if (arr.length === 0) return resolve([]);

    const results = new Array(arr.length);
    let finished = 0;

    arr.forEach((item, index) => {
      // 成功和失败都写入结果数组，因此不会像 Promise.all 一样短路。
      Promise.resolve(item).then(
        (value) => {
          results[index] = { status: 'fulfilled', value };
        },
        (reason) => {
          results[index] = { status: 'rejected', reason };
        },
      ).finally(() => {
        // 用统一完成计数判断所有任务是否都已经 settled。
        finished += 1;
        if (finished === arr.length) resolve(results);
      });
    });
  });
}`,
  },
  {
    id: "handwriting-limit-request",
    title: "手写并发请求控制器 limitRequest",
    summary: "考察任务队列、并发上限、结果顺序和错误处理。",
    shortAnswer: "考察任务队列、并发上限、结果顺序和错误处理。",
    category: "handwriting",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "并发控制",
      "队列",
      "Promise",
    ],
    interviewerFocus: [
      "是否能限制同时运行任务数",
      "是否保持结果顺序",
      "是否正确处理失败和继续调度",
    ],
    answer: "并发请求控制的核心是维护一个任务下标和当前运行数，每完成一个任务就启动下一个，直到全部完成。它不是串行，而是最多同时跑 limit 个任务。结果要按输入顺序保存，不能按完成顺序。复杂度 O(n)，空间 O(n)。边界包括 limit 小于 1、任务失败后是否继续执行剩余任务、是否需要快速失败；这里实现的是快速失败版本，真实业务可按 allSettled 语义改成全量收集。",
    oralAnswer: "并发请求控制的核心是维护一个任务下标和当前运行数，每完成一个任务就启动下一个，直到全部完成。它不是串行，而是最多同时跑 limit 个任务。结果要按输入顺序保存，不能按完成顺序。复杂度 O(n)，空间 O(n)。边界包括 limit 小于 1、任务失败后是否继续执行剩余任务、是否需要快速失败；这里实现的是快速失败版本，真实业务可按 allSettled 语义改成全量收集。",
    keyPoints: [
      "最多运行 limit 个任务",
      "完成一个补一个",
      "结果按输入顺序",
      "失败策略要先定义",
    ],
    followUps: [
      {
        question: "失败后是否还继续执行剩余请求？",
        answerHint: "取决于业务，可以快速失败，也可以收集全部结果。",
      },
      {
        question: "为什么不能直接 Promise.all 大量请求？",
        answerHint: "会打满浏览器或服务端资源，导致排队、失败或限流。",
      },
    ],
    code: `function limitRequest(tasks, limit) {
  return new Promise((resolve, reject) => {
    // 结果数组按任务下标写入，避免并发完成顺序影响返回顺序。
    const results = new Array(tasks.length);
    let nextIndex = 0;
    let running = 0;
    let finished = 0;
    let rejected = false;

    function runNext() {
      if (rejected) return;
      if (finished === tasks.length) return resolve(results);

      // 每次补齐空闲槽位，保证同时运行的任务数不超过 limit。
      while (running < limit && nextIndex < tasks.length) {
        const current = nextIndex++;
        running += 1;

        Promise.resolve()
          .then(() => tasks[current]())
          .then((value) => {
            results[current] = value;
            finished += 1;
            running -= 1;
            // 当前任务完成后继续调度下一个，形成队列推进。
            runNext();
          }, (error) => {
            rejected = true;
            reject(error);
          });
      }
    }

    runNext();
  });
}`,
  },
  {
    id: "handwriting-event-emitter",
    title: "手写 EventEmitter，支持 on、off、once 和 emit",
    summary: "考察发布订阅、监听器管理、一次性订阅和取消订阅。",
    shortAnswer: "考察发布订阅、监听器管理、一次性订阅和取消订阅。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "EventEmitter",
      "发布订阅",
      "once",
    ],
    interviewerFocus: [
      "是否能维护事件到监听器集合",
      "是否支持 once 自动解绑",
      "是否避免遍历时修改集合出错",
    ],
    answer: "EventEmitter 本质是事件名到监听器集合的映射。on 添加监听器，off 删除监听器，emit 按当前快照依次调用监听器，once 包一层函数，执行后先解绑再调用原函数。单次 on/off 平均 O(1)，emit 是 O(k)，k 是该事件监听器数量。边界要注意同一个函数重复绑定、emit 时监听器被删除、once 包装后仍能通过原函数 off，这些都可以继续增强。",
    oralAnswer: "EventEmitter 本质是事件名到监听器集合的映射。on 添加监听器，off 删除监听器，emit 按当前快照依次调用监听器，once 包一层函数，执行后先解绑再调用原函数。单次 on/off 平均 O(1)，emit 是 O(k)，k 是该事件监听器数量。边界要注意同一个函数重复绑定、emit 时监听器被删除、once 包装后仍能通过原函数 off，这些都可以继续增强。",
    keyPoints: [
      "事件名映射监听器集合",
      "emit 按快照执行",
      "once 执行后自动解绑",
      "emit 复杂度取决于监听器数量",
    ],
    followUps: [
      {
        question: "为什么 emit 时要复制监听器快照？",
        answerHint: "避免执行过程中 on/off 修改集合导致遍历异常或漏调。",
      },
      {
        question: "once 如何支持 off 原函数？",
        answerHint: "可在包装函数上保存原函数引用，off 时同时比较。",
      },
    ],
    code: `class EventEmitter {
  constructor() {
    // 用 Map 保存事件名到监听器集合的关系，方便按事件快速触达。
    this.events = new Map();
  }

  on(type, listener) {
    if (!this.events.has(type)) this.events.set(type, new Set());
    this.events.get(type).add(listener);
    return () => this.off(type, listener);
  }

  off(type, listener) {
    const listeners = this.events.get(type);
    if (!listeners) return;
    listeners.forEach((item) => {
      if (item === listener || item.raw === listener) listeners.delete(item);
    });
  }

  once(type, listener) {
    const wrapper = (...args) => {
      // once 的关键是先解绑再执行，避免监听器内部再次 emit 时重复触发。
      this.off(type, wrapper);
      listener(...args);
    };
    // 保存原函数引用，让 off(type, 原函数) 也能移除 once 包装函数。
    wrapper.raw = listener;
    this.on(type, wrapper);
  }

  emit(type, ...args) {
    const listeners = this.events.get(type);
    if (!listeners) return;
    // 复制快照后再遍历，避免执行过程中 on/off 修改集合影响本轮派发。
    [...listeners].forEach((listener) => listener(...args));
  }
}`,
  },
  {
    id: "handwriting-compose-pipe",
    title: "手写 compose 和 pipe 实现函数组合",
    summary: "考察函数组合方向、reduce 使用和中间件思想。",
    shortAnswer: "考察函数组合方向、reduce 使用和中间件思想。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "compose",
      "pipe",
      "函数式",
    ],
    interviewerFocus: [
      "是否理解 compose 从右到左",
      "是否理解 pipe 从左到右",
      "是否能说明中间件组合应用",
    ],
    answer: "compose 和 pipe 都是把多个函数组合成一个函数。compose 通常从右到左执行，pipe 从左到右执行，区别主要是可读方向。每个函数接收上一个函数的返回值，所以适合单值转换链，比如数据清洗、格式化，也能延伸到 Redux 中间件组合。复杂度是 O(n)，n 是函数数量；边界是初始参数如何传入、空函数列表返回什么、异步函数是否需要 composeAsync 版本。",
    oralAnswer: "compose 和 pipe 都是把多个函数组合成一个函数。compose 通常从右到左执行，pipe 从左到右执行，区别主要是可读方向。每个函数接收上一个函数的返回值，所以适合单值转换链，比如数据清洗、格式化，也能延伸到 Redux 中间件组合。复杂度是 O(n)，n 是函数数量；边界是初始参数如何传入、空函数列表返回什么、异步函数是否需要 composeAsync 版本。",
    keyPoints: [
      "compose 从右到左",
      "pipe 从左到右",
      "适合单值转换链",
      "异步组合需要单独处理",
    ],
    followUps: [
      {
        question: "compose([]) 应该返回什么？",
        answerHint: "通常返回 identity 函数，即输入什么返回什么。",
      },
      {
        question: "同步 compose 能处理 Promise 吗？",
        answerHint: "不能自然展开 Promise，需要异步版本或每步 await。",
      },
    ],
    code: `const identity = (value) => value;

function compose(...fns) {
  // 空组合返回 identity，让调用方不需要额外判断函数列表是否为空。
  if (fns.length === 0) return identity;
  // compose 从右到左执行，符合数学函数组合和中间件包裹顺序。
  return (input) => fns.reduceRight((value, fn) => fn(value), input);
}

function pipe(...fns) {
  if (fns.length === 0) return identity;
  // pipe 从左到右执行，更贴近日常数据处理流水线的阅读方向。
  return (input) => fns.reduce((value, fn) => fn(value), input);
}`,
  },
  {
    id: "handwriting-curry",
    title: "手写 curry，将多参数函数转换为分步调用",
    summary: "考察参数收集、函数 arity、递归返回和 this 绑定。",
    shortAnswer: "考察参数收集、函数 arity、递归返回和 this 绑定。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "curry",
      "函数式",
      "参数收集",
    ],
    interviewerFocus: [
      "是否理解柯里化是延迟收集参数",
      "是否根据 fn.length 判断完成",
      "是否保留 this 语义",
    ],
    answer: "curry 的目标是把 fn(a, b, c) 变成 fn(a)(b)(c) 或 fn(a, b)(c) 这种分步传参。实现上每次调用合并已有参数和新参数，当参数数量达到原函数 arity 时执行，否则继续返回收集函数。复杂度主要和调用次数和参数数量有关，空间是闭包保存的参数。边界包括可选参数、默认参数会影响 fn.length，this 绑定也要通过 apply 传递，生产库还会支持占位符。",
    oralAnswer: "curry 的目标是把 fn(a, b, c) 变成 fn(a)(b)(c) 或 fn(a, b)(c) 这种分步传参。实现上每次调用合并已有参数和新参数，当参数数量达到原函数 arity 时执行，否则继续返回收集函数。复杂度主要和调用次数和参数数量有关，空间是闭包保存的参数。边界包括可选参数、默认参数会影响 fn.length，this 绑定也要通过 apply 传递，生产库还会支持占位符。",
    keyPoints: [
      "分步收集参数",
      "达到 arity 后执行",
      "闭包保存已收集参数",
      "默认参数会影响 fn.length",
    ],
    followUps: [
      {
        question: "curry 和 bind 有什么区别？",
        answerHint: "bind 固定 this 和部分参数，curry 更强调按参数数量逐步调用。",
      },
      {
        question: "为什么默认参数会影响 curry？",
        answerHint: "函数的 length 不包含默认参数之后的参数，可能提前执行。",
      },
    ],
    code: `function curry(fn, ...presetArgs) {
  return function curried(...args) {
    // 每次调用都合并历史参数和本次参数，实现分步收集。
    const allArgs = [...presetArgs, ...args];
    if (allArgs.length >= fn.length) {
      // 参数收集足够后再执行原函数，同时保留当前 this。
      return fn.apply(this, allArgs);
    }
    // 参数不够时继续返回新函数，把已收集参数封存在闭包里。
    return curry(fn, ...allArgs);
  };
}`,
  },
  {
    id: "handwriting-flatten-array",
    title: "手写 flatten，支持指定展开深度",
    summary: "考察递归、深度控制、数组判断和复杂度分析。",
    shortAnswer: "考察递归、深度控制、数组判断和复杂度分析。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "flatten",
      "数组",
      "递归",
    ],
    interviewerFocus: [
      "是否支持 depth 参数",
      "是否保持元素顺序",
      "是否能说明时间和空间复杂度",
    ],
    answer: "flatten 的核心是深度优先遍历数组，遇到数组且 depth 大于 0 就继续展开，否则直接放入结果。时间复杂度 O(n)，n 是所有被访问元素数量，空间复杂度 O(n) 加递归栈深度。边界包括 depth 为 0 时原样浅拷贝、稀疏数组是否保留空位、非常深的数组可能栈溢出，生产实现可以改成显式栈迭代。",
    oralAnswer: "flatten 的核心是深度优先遍历数组，遇到数组且 depth 大于 0 就继续展开，否则直接放入结果。时间复杂度 O(n)，n 是所有被访问元素数量，空间复杂度 O(n) 加递归栈深度。边界包括 depth 为 0 时原样浅拷贝、稀疏数组是否保留空位、非常深的数组可能栈溢出，生产实现可以改成显式栈迭代。",
    keyPoints: [
      "递归展开数组",
      "depth 控制展开层数",
      "保持遍历顺序",
      "深层递归可能栈溢出",
    ],
    followUps: [
      {
        question: "Infinity 深度如何处理？",
        answerHint: "只要 depth > 0 就继续递归，Infinity 递减后仍是 Infinity。",
      },
      {
        question: "递归版有什么风险？",
        answerHint: "极深嵌套数组可能造成调用栈溢出。",
      },
    ],
    code: `function flatten(array, depth = 1) {
  const result = [];

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      // 只有 depth 仍然允许时才递归展开，避免超过调用方期望层级。
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}`,
  },
  {
    id: "handwriting-array-to-tree",
    title: "手写 arrayToTree，将扁平列表转换为树",
    summary: "考察哈希表建索引、父子挂载、孤儿节点和排序稳定性。",
    shortAnswer: "考察哈希表建索引、父子挂载、孤儿节点和排序稳定性。",
    category: "handwriting",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "arrayToTree",
      "树结构",
      "菜单",
    ],
    interviewerFocus: [
      "是否用 Map 降低查找复杂度",
      "是否处理父节点缺失",
      "是否保持原始顺序",
    ],
    answer: "数组转树最稳的方式是两遍遍历。第一遍用 Map 按 id 建索引，并给每个节点补 children；第二遍根据 parentId 找父节点，找到就 push 到父节点 children，找不到就作为根节点。时间复杂度 O(n)，空间复杂度 O(n)。边界包括 parentId 为空、父节点缺失、重复 id、循环引用和排序需求。真实菜单场景还要校验数据质量，避免脏数据让树渲染死循环。",
    oralAnswer: "数组转树最稳的方式是两遍遍历。第一遍用 Map 按 id 建索引，并给每个节点补 children；第二遍根据 parentId 找父节点，找到就 push 到父节点 children，找不到就作为根节点。时间复杂度 O(n)，空间复杂度 O(n)。边界包括 parentId 为空、父节点缺失、重复 id、循环引用和排序需求。真实菜单场景还要校验数据质量，避免脏数据让树渲染死循环。",
    keyPoints: [
      "两遍遍历构建树",
      "Map 提供 O(1) 查找",
      "父节点缺失可作为根或报错",
      "要关注重复 id 和循环数据",
    ],
    followUps: [
      {
        question: "为什么不用递归反复 filter？",
        answerHint: "反复 filter 通常 O(n²)，数据大时性能差。",
      },
      {
        question: "如何保持菜单排序？",
        answerHint: "可以先按 sort 排序，或挂载 children 后分别排序。",
      },
    ],
    code: `function arrayToTree(list, rootParentId = null) {
  const nodeMap = new Map();
  const roots = [];

  // 第一遍先建索引，后续找父节点时才能做到 O(1)。
  for (const item of list) {
    nodeMap.set(item.id, { ...item, children: [] });
  }

  // 第二遍再挂载父子关系，避免父节点出现在子节点之后时找不到。
  for (const item of list) {
    const node = nodeMap.get(item.id);
    const parent = nodeMap.get(item.parentId);

    if (item.parentId === rootParentId || !parent) {
      // 父节点缺失时作为根节点处理，适合菜单类数据的容错展示。
      roots.push(node);
    } else {
      parent.children.push(node);
    }
  }

  return roots;
}`,
  },
  {
    id: "handwriting-lru-cache",
    title: "手写 LRU Cache",
    summary: "考察 Map 顺序特性、最近使用更新、容量淘汰和复杂度。",
    shortAnswer: "考察 Map 顺序特性、最近使用更新、容量淘汰和复杂度。",
    category: "handwriting",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "LRU",
      "缓存",
      "Map",
    ],
    interviewerFocus: [
      "是否能 O(1) get/set",
      "是否更新最近使用顺序",
      "是否处理容量淘汰",
    ],
    answer: "LRU 的语义是最近使用的保留，最久未使用的淘汰。JavaScript Map 保持插入顺序，可以用 delete 再 set 把访问过的 key 移到末尾，Map 头部就是最久未使用项。get 和 set 平均 O(1)，空间 O(capacity)。边界包括 capacity 小于等于 0、更新已有 key 不增加容量、读取不存在返回约定值。生产级实现也可以用哈希表加双向链表，更容易精细控制节点。",
    oralAnswer: "LRU 的语义是最近使用的保留，最久未使用的淘汰。JavaScript Map 保持插入顺序，可以用 delete 再 set 把访问过的 key 移到末尾，Map 头部就是最久未使用项。get 和 set 平均 O(1)，空间 O(capacity)。边界包括 capacity 小于等于 0、更新已有 key 不增加容量、读取不存在返回约定值。生产级实现也可以用哈希表加双向链表，更容易精细控制节点。",
    keyPoints: [
      "最近访问移到末尾",
      "头部是最久未使用",
      "get/set 平均 O(1)",
      "超容量删除最旧 key",
    ],
    followUps: [
      {
        question: "为什么 Map 能简化 LRU？",
        answerHint: "Map 保留插入顺序，删除后重新 set 可更新顺序。",
      },
      {
        question: "双向链表版本有什么优势？",
        answerHint: "可更明确地 O(1) 移动节点，适合语言无有序 Map 的场景。",
      },
    ],
    code: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    // Map 保持插入顺序，头部天然代表最久未使用的 key。
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    // 访问后删除再插入，把当前 key 移到末尾表示最近使用。
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.capacity <= 0) return;
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      // 超出容量时淘汰 Map 头部，也就是最久未使用项。
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
  }
}`,
  },
  {
    id: "handwriting-retry",
    title: "手写 retry，支持最大次数和退避间隔",
    summary: "考察失败重试、可重试错误、退避策略和最终失败。",
    shortAnswer: "考察失败重试、可重试错误、退避策略和最终失败。",
    category: "handwriting",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "retry",
      "重试",
      "backoff",
    ],
    interviewerFocus: [
      "是否限制最大次数",
      "是否支持退避等待",
      "是否区分可重试和不可重试错误",
    ],
    answer: "retry 的重点不是简单 while，而是明确哪些错误可重试、最多重试几次、每次间隔如何增长。实现上用循环或递归都可以，每次失败后判断是否达到上限或不可重试，未达到就等待 delay 再继续。时间复杂度取决于重试次数，空间可以做到 O(1)。边界包括非幂等请求不适合自动重试、用户取消要中断、退避应加上限和抖动，避免大量客户端同时重试打爆服务。",
    oralAnswer: "retry 的重点不是简单 while，而是明确哪些错误可重试、最多重试几次、每次间隔如何增长。实现上用循环或递归都可以，每次失败后判断是否达到上限或不可重试，未达到就等待 delay 再继续。时间复杂度取决于重试次数，空间可以做到 O(1)。边界包括非幂等请求不适合自动重试、用户取消要中断、退避应加上限和抖动，避免大量客户端同时重试打爆服务。",
    keyPoints: [
      "限制最大重试次数",
      "区分可重试错误",
      "支持退避等待",
      "非幂等操作需谨慎",
    ],
    followUps: [
      {
        question: "为什么 POST 请求不能随便重试？",
        answerHint: "非幂等操作可能造成重复提交，需幂等键或服务端保护。",
      },
      {
        question: "为什么退避要加 jitter？",
        answerHint: "避免大量客户端在同一时间点集中重试。",
      },
    ],
    code: `const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function retry(task, options = {}) {
  const {
    retries = 3,
    delay = 300,
    shouldRetry = () => true,
  } = options;

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await task();
    } catch (error) {
      lastError = error;
      // 达到上限或业务判定不可重试时立即停止，避免错误请求无限放大。
      if (attempt === retries || !shouldRetry(error)) break;
      // 指数退避能给服务恢复时间，也能减少瞬时重试风暴。
      await sleep(delay * Math.pow(2, attempt));
    }
  }

  throw lastError;
}`,
  },
  {
    id: "algorithm-two-sum",
    title: "两数之和如何用哈希表做到一次遍历",
    summary: "考察哈希查找、下标返回、重复元素和复杂度。",
    shortAnswer: "考察哈希查找、下标返回、重复元素和复杂度。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "两数之和",
      "哈希表",
      "数组",
    ],
    interviewerFocus: [
      "是否能用 Map 降低查找复杂度",
      "是否处理重复值",
      "是否返回正确下标",
    ],
    answer: "两数之和最直接的优化是用 Map 存已经遍历过的数字和下标。遍历到当前值 num 时，计算 complement = target - num，如果 complement 已经在 Map 里，说明找到了两个不同位置；否则把当前 num 和下标放进 Map。时间复杂度 O(n)，空间 O(n)。边界包括重复元素，比如 target=6、数组里两个 3，必须先查再存，避免同一个元素被用两次。",
    oralAnswer: "两数之和最直接的优化是用 Map 存已经遍历过的数字和下标。遍历到当前值 num 时，计算 complement = target - num，如果 complement 已经在 Map 里，说明找到了两个不同位置；否则把当前 num 和下标放进 Map。时间复杂度 O(n)，空间 O(n)。边界包括重复元素，比如 target=6、数组里两个 3，必须先查再存，避免同一个元素被用两次。",
    keyPoints: [
      "Map 存已访问值",
      "先查 complement 再存当前值",
      "时间 O(n)",
      "重复元素要避免复用自身",
    ],
    followUps: [
      {
        question: "如果数组已排序还能怎么做？",
        answerHint: "可以用双指针 O(n) 查找，但会改变返回原下标的处理方式。",
      },
      {
        question: "为什么不能先把所有值放进 Map？",
        answerHint: "可以但要处理重复值下标列表，一次遍历更简单。",
      },
    ],
    code: `function twoSum(nums, target) {
  // Map 记录已访问数字的位置，把查找另一个数从 O(n) 降到 O(1)。
  const seen = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const need = target - nums[i];
    // 先查再存，避免 target 是当前数字两倍时复用同一个下标。
    if (seen.has(need)) {
      return [seen.get(need), i];
    }
    seen.set(nums[i], i);
  }

  return [];
}`,
  },
  {
    id: "algorithm-longest-unique-substring",
    title: "最长无重复子串如何用滑动窗口求解",
    summary: "考察双指针、字符最后位置、窗口收缩和复杂度。",
    shortAnswer: "考察双指针、字符最后位置、窗口收缩和复杂度。",
    category: "algorithm",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "滑动窗口",
      "字符串",
      "双指针",
    ],
    interviewerFocus: [
      "是否能维护无重复窗口",
      "是否正确移动左边界",
      "是否处理 Unicode 边界",
    ],
    answer: "这题用滑动窗口最自然。右指针不断扩展，Map 记录字符最近一次出现的位置；如果当前字符在窗口内出现过，就把左边界移动到上次位置后一位，保证窗口内没有重复。每个字符最多进出窗口一次，时间 O(n)，空间 O(k)，k 是字符集大小。边界包括空字符串、全重复、全不重复；如果考虑完整 Unicode 字符，需要按 code point 遍历而不是简单按 UTF-16 下标。",
    oralAnswer: "这题用滑动窗口最自然。右指针不断扩展，Map 记录字符最近一次出现的位置；如果当前字符在窗口内出现过，就把左边界移动到上次位置后一位，保证窗口内没有重复。每个字符最多进出窗口一次，时间 O(n)，空间 O(k)，k 是字符集大小。边界包括空字符串、全重复、全不重复；如果考虑完整 Unicode 字符，需要按 code point 遍历而不是简单按 UTF-16 下标。",
    keyPoints: [
      "窗口保持无重复",
      "Map 记录最后位置",
      "左边界只右移不回退",
      "时间复杂度 O(n)",
    ],
    followUps: [
      {
        question: "为什么左边界不能直接设为 lastIndex + 1？",
        answerHint: "要取 max，避免遇到窗口左侧的旧重复字符导致左边界回退。",
      },
      {
        question: "空间复杂度和什么有关？",
        answerHint: "和窗口内可能出现的字符种类数量有关。",
      },
    ],
    code: `function lengthOfLongestSubstring(s) {
  // 记录字符最近位置，重复时可以直接跳过无效窗口。
  const lastIndex = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right += 1) {
    const char = s[right];
    if (lastIndex.has(char) && lastIndex.get(char) >= left) {
      // 左边界只向右移动，避免被窗口外的旧重复字符拉回去。
      left = lastIndex.get(char) + 1;
    }
    lastIndex.set(char, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}`,
  },
  {
    id: "algorithm-valid-parentheses",
    title: "有效括号如何用栈判断",
    summary: "考察栈结构、括号映射、提前失败和奇数长度边界。",
    shortAnswer: "考察栈结构、括号映射、提前失败和奇数长度边界。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "栈",
      "括号匹配",
      "字符串",
    ],
    interviewerFocus: [
      "是否能用栈保存待匹配左括号",
      "是否能提前判断非法右括号",
      "是否处理空字符串",
    ],
    answer: "有效括号用栈即可。遇到左括号入栈，遇到右括号时弹出栈顶，看是否是对应左括号；如果栈为空或类型不匹配，直接返回 false。遍历结束后栈为空才说明全部匹配。时间复杂度 O(n)，空间 O(n)。边界包括空字符串通常有效，长度为奇数一定无效，出现非括号字符时要根据题目定义决定忽略还是判错。",
    oralAnswer: "有效括号用栈即可。遇到左括号入栈，遇到右括号时弹出栈顶，看是否是对应左括号；如果栈为空或类型不匹配，直接返回 false。遍历结束后栈为空才说明全部匹配。时间复杂度 O(n)，空间 O(n)。边界包括空字符串通常有效，长度为奇数一定无效，出现非括号字符时要根据题目定义决定忽略还是判错。",
    keyPoints: [
      "左括号入栈",
      "右括号匹配栈顶",
      "不匹配提前失败",
      "结束栈空才有效",
    ],
    followUps: [
      {
        question: "为什么只记录左括号就够了？",
        answerHint: "右括号必须和最近的未匹配左括号成对，这正符合栈的后进先出。",
      },
      {
        question: "如果有通配符 * 怎么办？",
        answerHint: "题目会变成区间或双栈问题，不能用简单映射直接解决。",
      },
    ],
    code: `function isValidParentheses(s) {
  // 右括号映射到期望的左括号，方便弹栈后直接比较。
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (stack.pop() !== pairs[char]) {
      // 右括号必须匹配最近的左括号，不匹配可以提前失败。
      return false;
    }
  }

  // 遍历结束后栈为空，才说明没有未闭合的左括号。
  return stack.length === 0;
}`,
  },
  {
    id: "algorithm-reverse-linked-list",
    title: "反转链表如何用迭代方式实现",
    summary: "考察指针移动、断链顺序、空链表和复杂度。",
    shortAnswer: "考察指针移动、断链顺序、空链表和复杂度。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "链表",
      "指针",
      "迭代",
    ],
    interviewerFocus: [
      "是否能正确保存 next",
      "是否避免链表断裂",
      "是否说明空间复杂度",
    ],
    answer: "反转链表的迭代解法用 prev、current、next 三个指针。每轮先保存 current.next，防止断链；再把 current.next 指向 prev；然后 prev 和 current 向前移动。遍历结束时 prev 就是新头节点。时间复杂度 O(n)，空间复杂度 O(1)。边界包括空链表、单节点链表，以及面试时要说清楚先保存 next 再改指向，否则后续节点会丢失。",
    oralAnswer: "反转链表的迭代解法用 prev、current、next 三个指针。每轮先保存 current.next，防止断链；再把 current.next 指向 prev；然后 prev 和 current 向前移动。遍历结束时 prev 就是新头节点。时间复杂度 O(n)，空间复杂度 O(1)。边界包括空链表、单节点链表，以及面试时要说清楚先保存 next 再改指向，否则后续节点会丢失。",
    keyPoints: [
      "保存 next 防断链",
      "current.next 指向 prev",
      "双指针向前推进",
      "空间 O(1)",
    ],
    followUps: [
      {
        question: "递归反转链表的空间复杂度是多少？",
        answerHint: "递归调用栈是 O(n)，迭代可以做到 O(1)。",
      },
      {
        question: "如何反转链表的一段区间？",
        answerHint: "需要记录区间前驱和区间尾部，反转后重新接回原链表。",
      },
    ],
    code: `function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    // 先保存 next，再改指向，否则后续链表会丢失。
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}`,
  },
  {
    id: "algorithm-binary-search",
    title: "二分查找如何避免边界死循环",
    summary: "考察左右闭区间、mid 计算、边界收缩和未找到返回值。",
    shortAnswer: "考察左右闭区间、mid 计算、边界收缩和未找到返回值。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "二分查找",
      "边界",
      "有序数组",
    ],
    interviewerFocus: [
      "是否明确区间定义",
      "是否正确收缩左右边界",
      "是否能处理不存在目标",
    ],
    answer: "二分查找最重要的是先定义区间语义。以左右闭区间为例，while 条件是 left <= right，mid 命中直接返回；nums[mid] 小于目标时，说明 mid 及左侧都不可能，left = mid + 1；反之 right = mid - 1。时间复杂度 O(log n)，空间 O(1)。边界包括空数组、一个元素、目标不在数组中，以及 mid 计算最好写成 left + Math.floor((right - left) / 2)，避免其他语言里的整数溢出。",
    oralAnswer: "二分查找最重要的是先定义区间语义。以左右闭区间为例，while 条件是 left <= right，mid 命中直接返回；nums[mid] 小于目标时，说明 mid 及左侧都不可能，left = mid + 1；反之 right = mid - 1。时间复杂度 O(log n)，空间 O(1)。边界包括空数组、一个元素、目标不在数组中，以及 mid 计算最好写成 left + Math.floor((right - left) / 2)，避免其他语言里的整数溢出。",
    keyPoints: [
      "先定义区间语义",
      "左右闭用 left <= right",
      "每次排除 mid",
      "时间 O(log n)",
    ],
    followUps: [
      {
        question: "查找第一个大于等于 target 怎么改？",
        answerHint: "命中时不直接返回，继续收缩右边界保留候选答案。",
      },
      {
        question: "为什么二分容易死循环？",
        answerHint: "区间定义和边界更新不一致，导致 left/right 没有推进。",
      },
    ],
    code: `function binarySearch(nums, target) {
  // 这里使用左右闭区间，所以循环条件必须允许 left === right。
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 这种写法能避免其他语言里 left + right 可能溢出的问题。
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    // 每次都排除 mid，保证区间持续收缩，不会死循环。
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}`,
  },
  {
    id: "algorithm-merge-intervals",
    title: "合并区间如何先排序再线性扫描",
    summary: "考察区间排序、重叠判断、结果合并和复杂度。",
    shortAnswer: "考察区间排序、重叠判断、结果合并和复杂度。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "区间合并",
      "排序",
      "数组",
    ],
    interviewerFocus: [
      "是否先按起点排序",
      "是否正确判断区间重叠",
      "是否说明排序复杂度",
    ],
    answer: "合并区间先按起点升序排序，然后从左到右扫描。当前区间如果和结果最后一个区间重叠，就更新最后区间的结束值为两者最大；否则追加为新区间。排序是 O(n log n)，扫描 O(n)，总时间 O(n log n)，空间取决于输出。边界包括空数组、端点相等是否算重叠、输入是否允许修改；如果不想修改原数组，可以先拷贝再排序。",
    oralAnswer: "合并区间先按起点升序排序，然后从左到右扫描。当前区间如果和结果最后一个区间重叠，就更新最后区间的结束值为两者最大；否则追加为新区间。排序是 O(n log n)，扫描 O(n)，总时间 O(n log n)，空间取决于输出。边界包括空数组、端点相等是否算重叠、输入是否允许修改；如果不想修改原数组，可以先拷贝再排序。",
    keyPoints: [
      "先按起点排序",
      "只需和结果最后区间比较",
      "重叠时更新右端点",
      "总时间由排序决定",
    ],
    followUps: [
      {
        question: "为什么排序后只看最后一个结果区间？",
        answerHint: "起点有序，当前区间只可能和最近合并后的区间重叠。",
      },
      {
        question: "端点相等算重叠吗？",
        answerHint: "通常闭区间 [1,4] 和 [4,5] 算重叠，但要按题意确认。",
      },
    ],
    code: `function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // 先按起点排序，后续只需要和结果集最后一个区间比较。
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);
  const result = [sorted[0].slice()];

  for (let i = 1; i < sorted.length; i += 1) {
    const last = result[result.length - 1];
    const current = sorted[i];

    if (current[0] <= last[1]) {
      // 有重叠时只扩展右边界，保持合并后的区间尽可能大。
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current.slice());
    }
  }

  return result;
}`,
  },
  {
    id: "algorithm-binary-tree-level-order",
    title: "二叉树层序遍历如何按层输出",
    summary: "考察队列、层大小控制、空树和时间空间复杂度。",
    shortAnswer: "考察队列、层大小控制、空树和时间空间复杂度。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "medium",
    tags: [
      "二叉树",
      "层序遍历",
      "队列",
    ],
    interviewerFocus: [
      "是否使用队列先进先出",
      "是否能按层分组",
      "是否处理空树",
    ],
    answer: "层序遍历本质是 BFS，用队列保存当前待访问节点。为了按层输出，每轮先记录当前队列长度 size，这个长度就是当前层节点数；循环 size 次弹出节点，收集值，并把左右子节点入队。时间复杂度 O(n)，每个节点进出队一次；空间复杂度 O(w)，w 是树的最大宽度。边界包括空树返回空数组、只有根节点、以及非常宽的树会占用较多队列空间。",
    oralAnswer: "层序遍历本质是 BFS，用队列保存当前待访问节点。为了按层输出，每轮先记录当前队列长度 size，这个长度就是当前层节点数；循环 size 次弹出节点，收集值，并把左右子节点入队。时间复杂度 O(n)，每个节点进出队一次；空间复杂度 O(w)，w 是树的最大宽度。边界包括空树返回空数组、只有根节点、以及非常宽的树会占用较多队列空间。",
    keyPoints: [
      "队列实现 BFS",
      "每轮 size 固定当前层",
      "左右子节点入队",
      "空间取决于树最大宽度",
    ],
    followUps: [
      {
        question: "如何做之字形层序遍历？",
        answerHint: "按层收集后根据层号决定是否反转，或用双端队列。",
      },
      {
        question: "DFS 能做层序分组吗？",
        answerHint: "可以递归时带 depth，把值放到对应 depth 的数组。",
      },
    ],
    code: `function levelOrder(root) {
  if (!root) return [];

  const result = [];
  // 队列保证先进先出，正好对应 BFS 的访问顺序。
  const queue = [root];

  while (queue.length > 0) {
    // 先固定本层节点数，避免新入队的下一层节点混入当前层。
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}`,
  },
  {
    id: "algorithm-array-to-tree",
    title: "数组转树算法如何处理父子关系和异常数据",
    summary: "考察 Map 索引、根节点识别、孤儿节点和重复 id。",
    shortAnswer: "考察 Map 索引、根节点识别、孤儿节点和重复 id。",
    category: "algorithm",
    difficulty: "intermediate",
    frequency: "high",
    tags: [
      "数组转树",
      "树结构",
      "Map",
    ],
    interviewerFocus: [
      "是否能 O(n) 建树",
      "是否处理孤儿节点",
      "是否关注重复 id 和循环引用",
    ],
    answer: "数组转树和菜单构建很常见，核心是先用 Map 建 id 到节点的索引，再遍历列表把每个节点挂到父节点 children 上。这样查父节点是 O(1)，整体 O(n)，比递归 filter 的 O(n²) 更适合大数据。边界要提前定义：parentId 为空是根；父节点不存在是作为根、丢弃还是报错；重复 id 应直接校验失败；如果后端可能给出循环父子关系，还要做数据校验，避免渲染树时无限递归。",
    oralAnswer: "数组转树和菜单构建很常见，核心是先用 Map 建 id 到节点的索引，再遍历列表把每个节点挂到父节点 children 上。这样查父节点是 O(1)，整体 O(n)，比递归 filter 的 O(n²) 更适合大数据。边界要提前定义：parentId 为空是根；父节点不存在是作为根、丢弃还是报错；重复 id 应直接校验失败；如果后端可能给出循环父子关系，还要做数据校验，避免渲染树时无限递归。",
    keyPoints: [
      "Map 建索引降低复杂度",
      "两遍遍历完成挂载",
      "父节点缺失策略要明确",
      "重复 id 和循环要校验",
    ],
    followUps: [
      {
        question: "和手写 arrayToTree 的实现有什么区别？",
        answerHint: "算法题更强调复杂度、异常数据和边界策略，而不只是代码能跑。",
      },
      {
        question: "如何检测循环父子关系？",
        answerHint: "可在父链回溯时记录访问集合，或建图后做 DFS 环检测。",
      },
    ],
    code: `function buildTree(items) {
  const map = new Map();
  const roots = [];

  for (const item of items) {
    if (map.has(item.id)) {
      // 重复 id 会让父子关系不确定，必须提前失败。
      throw new Error('duplicate id: ' + item.id);
    }
    // 先复制节点并补 children，避免直接修改原始输入数据。
    map.set(item.id, { ...item, children: [] });
  }

  for (const item of items) {
    const node = map.get(item.id);
    const parent = map.get(item.parentId);

    if (!item.parentId || !parent) {
      // 父节点为空或缺失时放入根集合，具体是否报错可按业务调整。
      roots.push(node);
    } else {
      parent.children.push(node);
    }
  }

  return roots;
}`,
  },
  {
    id: "ai-coding-real-workflow",
    title: "如何在真实前端研发流程中使用 AI Coding",
    summary: "考察需求拆解、上下文准备、任务切片、验收和回归闭环。",
    shortAnswer: "考察需求拆解、上下文准备、任务切片、验收和回归闭环。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "AI Coding",
      "研发流程",
      "任务切片",
      "验收",
    ],
    interviewerFocus: [
      "是否能把 AI 放进真实开发流程而不是只生成代码",
      "是否知道先给上下文和边界再执行任务",
      "是否能设计验收、回归和人工 review 闭环",
    ],
    answer: "我不会把 AI Coding 理解成“让模型直接写完功能”，而是把它放进正常研发流程里。第一步是把需求拆成 Spec，明确做什么、不做什么、数据模型、路由、组件边界和验收标准；第二步准备上下文，让 AI 先读相关代码、规范和现有模式；第三步按小任务执行，比如先搭路由，再做列表，再接搜索，避免一次性大改。每个任务结束都要跑 lint、build、关键路径手测，并做人工 review。取舍上，AI 适合加速样板、重构和批量内容，但需求判断、架构边界、风险识别仍要由工程师负责。",
    oralAnswer: "我不会把 AI Coding 理解成“让模型直接写完功能”，而是把它放进正常研发流程里。第一步是把需求拆成 Spec，明确做什么、不做什么、数据模型、路由、组件边界和验收标准；第二步准备上下文，让 AI 先读相关代码、规范和现有模式；第三步按小任务执行，比如先搭路由，再做列表，再接搜索，避免一次性大改。每个任务结束都要跑 lint、build、关键路径手测，并做人工 review。取舍上，AI 适合加速样板、重构和批量内容，但需求判断、架构边界、风险识别仍要由工程师负责。",
    keyPoints: [
      "先写 Spec 再编码",
      "提供代码上下文和边界",
      "任务要小步可验收",
      "人工 review 负责最终质量",
    ],
    followUps: [
      {
        question: "什么任务不适合直接交给 AI 做？",
        answerHint: "业务边界不清、权限高风险、生产事故处理和缺少验收标准的任务都不适合直接放手。",
      },
      {
        question: "如何判断 AI 输出可以进入下一步？",
        answerHint: "至少通过自动检查、核心手测和人工 review，且没有越过 Spec 范围。",
      },
    ],
    relatedQuestionIds: [
      "ai-coding-spec-workflow",
    ],
  },
  {
    id: "ai-coding-quality-control",
    title: "AI 生成代码如何保证质量",
    summary: "考察自动检查、人工 review、测试补齐、风险分级和回滚策略。",
    shortAnswer: "考察自动检查、人工 review、测试补齐、风险分级和回滚策略。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "AI 代码质量",
      "review",
      "测试",
      "回归",
    ],
    interviewerFocus: [
      "是否有自动化质量门禁",
      "是否能识别 AI 常见风险",
      "是否把质量控制落到 review 和验证流程",
    ],
    answer: "AI 生成代码的质量保证要靠流程，而不是靠信任模型。自动层面先跑 typecheck、lint、build、单测和关键 e2e；结构层面检查是否遵守现有目录、组件模式、状态边界和 MVP 范围；人工 review 重点看行为是否正确、边界条件是否漏掉、是否引入隐藏副作用和不必要抽象。对于高风险改动，比如权限、支付、数据删除，要提高 review 等级并准备回滚方案。我的原则是 AI 可以提交候选实现，但 merge 标准和人写代码一样，甚至更严格，因为它可能写出看似合理但语义偏差的代码。",
    oralAnswer: "AI 生成代码的质量保证要靠流程，而不是靠信任模型。自动层面先跑 typecheck、lint、build、单测和关键 e2e；结构层面检查是否遵守现有目录、组件模式、状态边界和 MVP 范围；人工 review 重点看行为是否正确、边界条件是否漏掉、是否引入隐藏副作用和不必要抽象。对于高风险改动，比如权限、支付、数据删除，要提高 review 等级并准备回滚方案。我的原则是 AI 可以提交候选实现，但 merge 标准和人写代码一样，甚至更严格，因为它可能写出看似合理但语义偏差的代码。",
    keyPoints: [
      "质量靠流程而不是信任",
      "自动门禁先拦基础问题",
      "人工 review 看行为和边界",
      "高风险改动要升级审查",
    ],
    followUps: [
      {
        question: "AI 代码最常见的质量问题是什么？",
        answerHint: "越界实现、误用现有 API、遗漏边界、测试只覆盖 happy path、引入无关重构。",
      },
      {
        question: "为什么不能只靠测试保证 AI 代码质量？",
        answerHint: "测试覆盖不到需求理解和架构边界，人工 review 仍要判断语义是否正确。",
      },
    ],
    relatedQuestionIds: [
      "engineering-ci-quality-gate",
    ],
  },
  {
    id: "ai-coding-codex-zero-to-one",
    title: "如何用 Codex 从 0 搭建一个前端项目",
    summary: "考察初始化、规格约束、技术选型、迭代顺序和验收方式。",
    shortAnswer: "考察初始化、规格约束、技术选型、迭代顺序和验收方式。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "Codex",
      "从 0 到 1",
      "项目初始化",
      "Spec",
    ],
    interviewerFocus: [
      "是否能让 Codex 先产出规格而不是直接写业务代码",
      "是否能按阶段驱动项目落地",
      "是否有每阶段验收和纠偏方式",
    ],
    answer: "用 Codex 从 0 搭项目，我会先让它生成规格文档，而不是直接生成代码。规格里要写清目标用户、MVP 范围、技术栈、路由、数据模型、组件拆分和验收清单。第二步再按阶段执行：初始化工程、配置路由和样式、准备静态数据、实现页面、接搜索筛选、做复制和响应式。每次只给一个明确任务，并要求它说明修改文件、实现功能和验证命令。这样做的取舍是前期慢一点，但能显著降低模型跑偏、功能膨胀和后期返工。",
    oralAnswer: "用 Codex 从 0 搭项目，我会先让它生成规格文档，而不是直接生成代码。规格里要写清目标用户、MVP 范围、技术栈、路由、数据模型、组件拆分和验收清单。第二步再按阶段执行：初始化工程、配置路由和样式、准备静态数据、实现页面、接搜索筛选、做复制和响应式。每次只给一个明确任务，并要求它说明修改文件、实现功能和验证命令。这样做的取舍是前期慢一点，但能显著降低模型跑偏、功能膨胀和后期返工。",
    keyPoints: [
      "先规格后代码",
      "阶段化推进",
      "每次任务范围要小",
      "验证命令和交付说明必须固定",
    ],
    followUps: [
      {
        question: "什么时候可以让 Codex 直接改代码？",
        answerHint: "当规格、上下文、边界和验收条件都明确时，可以进入小步实现。",
      },
      {
        question: "从 0 搭项目最容易跑偏的点是什么？",
        answerHint: "模型会自作主张加后端、登录、状态库或 UI 库，所以要明确禁止项。",
      },
    ],
    relatedQuestionIds: [
      "ai-coding-spec-workflow",
    ],
  },
  {
    id: "ai-coding-agent-guardrails",
    title: "如何让 AI Agent 不跑偏",
    summary: "考察上下文边界、禁止项、检查点、最小改动和中途纠偏。",
    shortAnswer: "考察上下文边界、禁止项、检查点、最小改动和中途纠偏。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "AI Agent",
      "范围控制",
      "上下文",
      "防跑偏",
    ],
    interviewerFocus: [
      "是否能写清禁止新增的能力",
      "是否能用任务切片和检查点约束执行",
      "是否会让 Agent 先读代码再改代码",
    ],
    answer: "让 AI Agent 不跑偏，本质是把不确定性关进笼子里。Prompt 里要明确当前任务、允许修改的文件、禁止新增的功能、必须遵守的技术方案和完成后的验证要求。执行前让 Agent 先读相关文件和 Spec，输出理解或计划；执行中要求小步提交，不做无关重构；执行后用自动检查和人工 review 对照验收清单。对于复杂任务，我会把它拆成多个可回滚的小 PR，而不是让 Agent 一次改几十个文件。跑偏时要立刻收敛范围，而不是继续在错误方向上补丁。",
    oralAnswer: "让 AI Agent 不跑偏，本质是把不确定性关进笼子里。Prompt 里要明确当前任务、允许修改的文件、禁止新增的功能、必须遵守的技术方案和完成后的验证要求。执行前让 Agent 先读相关文件和 Spec，输出理解或计划；执行中要求小步提交，不做无关重构；执行后用自动检查和人工 review 对照验收清单。对于复杂任务，我会把它拆成多个可回滚的小 PR，而不是让 Agent 一次改几十个文件。跑偏时要立刻收敛范围，而不是继续在错误方向上补丁。",
    keyPoints: [
      "明确允许和禁止边界",
      "先读上下文再执行",
      "小步修改可回滚",
      "用验收清单纠偏",
    ],
    followUps: [
      {
        question: "Agent 已经改了很多无关文件怎么办？",
        answerHint: "先识别无关变更，保留必要修改，避免继续扩大范围，必要时按文件回退。",
      },
      {
        question: "为什么要限制可修改文件？",
        answerHint: "可以减少连带风险，也让 review 更聚焦。",
      },
    ],
    relatedQuestionIds: [
      "ai-coding-quality-control",
    ],
  },
  {
    id: "ai-coding-review-generated-code",
    title: "如何 review AI 生成的前端代码",
    summary: "考察 review 重点、行为验证、边界条件、可维护性和安全风险。",
    shortAnswer: "考察 review 重点、行为验证、边界条件、可维护性和安全风险。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "AI review",
      "代码审查",
      "风险识别",
      "可维护性",
    ],
    interviewerFocus: [
      "是否知道 AI 代码 review 不能只看语法",
      "是否关注需求符合度和边界条件",
      "是否能识别过度抽象和隐藏副作用",
    ],
    answer: "review AI 代码时我会先对照 Spec 看它有没有实现错范围：有没有加不该加的功能、改不该改的模块。然后看行为正确性，尤其是空状态、错误状态、权限边界、异步竞态和移动端。第三看工程质量：是否复用现有组件和工具，是否引入过度抽象，类型是否真实约束而不是一堆 as，副作用是否清理。最后看验证：它跑了哪些命令，是否有手测路径。AI 代码很容易“表面合理”，所以 review 要更重视语义和边界，而不是只看格式。",
    oralAnswer: "review AI 代码时我会先对照 Spec 看它有没有实现错范围：有没有加不该加的功能、改不该改的模块。然后看行为正确性，尤其是空状态、错误状态、权限边界、异步竞态和移动端。第三看工程质量：是否复用现有组件和工具，是否引入过度抽象，类型是否真实约束而不是一堆 as，副作用是否清理。最后看验证：它跑了哪些命令，是否有手测路径。AI 代码很容易“表面合理”，所以 review 要更重视语义和边界，而不是只看格式。",
    keyPoints: [
      "先对照 Spec 看范围",
      "重点查边界和异步",
      "警惕 as 和过度抽象",
      "验证路径要可复现",
    ],
    followUps: [
      {
        question: "AI 生成的测试也需要 review 吗？",
        answerHint: "需要，测试可能只是验证实现细节或 happy path，不能证明需求正确。",
      },
      {
        question: "review 时如何发现隐藏副作用？",
        answerHint: "重点看 effect、全局状态、定时器、订阅、缓存和外部 API 调用。",
      },
    ],
    relatedQuestionIds: [
      "ai-coding-quality-control",
    ],
  },
  {
    id: "ai-coding-team-adoption",
    title: "AI Coding 如何在团队里落地",
    summary: "考察流程规范、权限边界、模板沉淀、质量门禁和团队培训。",
    shortAnswer: "考察流程规范、权限边界、模板沉淀、质量门禁和团队培训。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "团队落地",
      "AI Coding",
      "流程规范",
      "质量门禁",
    ],
    interviewerFocus: [
      "是否能从个人效率扩展到团队流程",
      "是否考虑权限、安全和代码质量",
      "是否能沉淀 Prompt、Spec 和评审规范",
    ],
    answer: "团队落地 AI Coding 不能只靠个人尝鲜，要先定义哪些任务适合 AI，哪些任务必须人工主导。适合的包括样板代码、低风险页面、测试计划、重构候选、文档和代码 review 辅助；不适合的是权限、安全、资金、生产事故等高风险决策。流程上要沉淀 Spec 模板、Prompt 模板、review checklist 和质量门禁，并限制 Agent 的权限，比如不能直接推主干、不能绕过 CI。落地效果要看交付周期、缺陷率、review 时间和返工率，而不是只看生成了多少代码。",
    oralAnswer: "团队落地 AI Coding 不能只靠个人尝鲜，要先定义哪些任务适合 AI，哪些任务必须人工主导。适合的包括样板代码、低风险页面、测试计划、重构候选、文档和代码 review 辅助；不适合的是权限、安全、资金、生产事故等高风险决策。流程上要沉淀 Spec 模板、Prompt 模板、review checklist 和质量门禁，并限制 Agent 的权限，比如不能直接推主干、不能绕过 CI。落地效果要看交付周期、缺陷率、review 时间和返工率，而不是只看生成了多少代码。",
    keyPoints: [
      "先定义适用任务边界",
      "沉淀模板和 checklist",
      "AI 不能绕过质量门禁",
      "用交付和缺陷指标评估效果",
    ],
    followUps: [
      {
        question: "团队如何避免每个人 Prompt 风格不一致？",
        answerHint: "沉淀共享模板，并把关键约束写进项目 Spec 和工程规范。",
      },
      {
        question: "AI Coding 会不会降低团队代码理解？",
        answerHint: "如果只接受输出不 review 会降低；如果结合 review 和复盘，反而能提升知识沉淀。",
      },
    ],
    relatedQuestionIds: [
      "engineering-ci-quality-gate",
    ],
  },
  {
    id: "ai-coding-frontend-core-competency",
    title: "AI 时代前端工程师的核心竞争力是什么",
    summary: "考察需求判断、架构抽象、质量控制、工具协作和业务理解。",
    shortAnswer: "考察需求判断、架构抽象、质量控制、工具协作和业务理解。",
    category: "ai-coding",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "AI 时代",
      "前端能力",
      "架构",
      "质量",
    ],
    interviewerFocus: [
      "是否能区分编码速度和工程能力",
      "是否强调问题定义和质量判断",
      "是否能把 AI 作为协作工具而非替代思考",
    ],
    answer: "AI 会降低写样板代码的门槛，但不会替代前端工程师对问题的定义、架构取舍和质量判断。真正重要的能力包括：能把业务目标拆成清晰 Spec；能设计稳定的数据流、组件边界和性能方案；能识别 AI 输出里的隐藏风险；能建立自动化质量门禁；还能把复杂方案讲清楚并推动团队落地。换句话说，前端的价值会从“我能写代码”更多转向“我知道该写什么、不该写什么、如何验证它正确”。会用 AI 的工程师会更快，但前提是他本来就有判断力。",
    oralAnswer: "AI 会降低写样板代码的门槛，但不会替代前端工程师对问题的定义、架构取舍和质量判断。真正重要的能力包括：能把业务目标拆成清晰 Spec；能设计稳定的数据流、组件边界和性能方案；能识别 AI 输出里的隐藏风险；能建立自动化质量门禁；还能把复杂方案讲清楚并推动团队落地。换句话说，前端的价值会从“我能写代码”更多转向“我知道该写什么、不该写什么、如何验证它正确”。会用 AI 的工程师会更快，但前提是他本来就有判断力。",
    keyPoints: [
      "核心是问题定义和判断力",
      "架构和质量控制更重要",
      "AI 是协作工具",
      "验证能力决定交付质量",
    ],
    followUps: [
      {
        question: "初中级工程师如何提升 AI 时代竞争力？",
        answerHint: "先补基础和工程实践，再学习如何写 Spec、拆任务、review 和验证。",
      },
      {
        question: "为什么说会提问不等于会用 AI Coding？",
        answerHint: "真正落地还需要上下文组织、范围控制、代码审查和结果验证。",
      },
    ],
    relatedQuestionIds: [
      "ai-coding-real-workflow",
    ],
  },
  {
    id: "project-permission-system-design",
    title: "如何设计大型后台的权限系统",
    summary: "考察 RBAC、动态路由、按钮权限、数据权限和安全边界。",
    shortAnswer: "考察 RBAC、动态路由、按钮权限、数据权限和安全边界。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "权限系统",
      "RBAC",
      "动态路由",
      "数据权限",
    ],
    interviewerFocus: [
      "是否能区分菜单权限、操作权限和数据权限",
      "是否知道前端权限不能替代服务端鉴权",
      "是否能设计动态路由和权限缓存刷新",
    ],
    answer: "我会把权限系统拆成三层：路由菜单权限决定用户能看到哪些页面，操作权限决定按钮和功能入口是否可用，数据权限决定接口返回的数据范围。前端可以根据后端下发的权限点生成动态路由和按钮状态，但这只是体验层控制，真正安全必须在服务端鉴权。方案上，登录后拉取用户、角色、权限点和组织范围，前端把权限点做成 Set，路由表通过 meta.permission 过滤，按钮通过权限组件或 hook 判断。取舍上，前端不要硬编码角色名，而应依赖权限点；缓存要考虑角色变更后的刷新。验证时覆盖无权限路由、刷新后恢复、按钮隐藏、接口越权和多角色合并。",
    oralAnswer: "我会把权限系统拆成三层：路由菜单权限决定用户能看到哪些页面，操作权限决定按钮和功能入口是否可用，数据权限决定接口返回的数据范围。前端可以根据后端下发的权限点生成动态路由和按钮状态，但这只是体验层控制，真正安全必须在服务端鉴权。方案上，登录后拉取用户、角色、权限点和组织范围，前端把权限点做成 Set，路由表通过 meta.permission 过滤，按钮通过权限组件或 hook 判断。取舍上，前端不要硬编码角色名，而应依赖权限点；缓存要考虑角色变更后的刷新。验证时覆盖无权限路由、刷新后恢复、按钮隐藏、接口越权和多角色合并。",
    keyPoints: [
      "权限分菜单、操作和数据",
      "前端控制不替代后端鉴权",
      "用权限点而非角色名判断",
      "角色变化要刷新权限缓存",
    ],
    followUps: [
      {
        question: "动态路由是前端生成还是后端下发？",
        answerHint: "两者都可，复杂系统常后端下发权限点，前端用本地路由表过滤，兼顾类型和可维护性。",
      },
      {
        question: "按钮隐藏是否足够安全？",
        answerHint: "不够，接口必须校验权限，否则用户可绕过前端直接请求。",
      },
    ],
    scene: "一个多角色 SaaS 后台，包含总部、区域、门店等组织层级，用户可拥有多个角色，页面、按钮和数据范围都需要权限控制。",
  },
  {
    id: "project-low-code-form-engine",
    title: "如何设计低代码表单引擎",
    summary: "考察 schema 协议、渲染器、校验、联动、扩展和版本治理。",
    shortAnswer: "考察 schema 协议、渲染器、校验、联动、扩展和版本治理。",
    category: "project",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "低代码",
      "表单引擎",
      "Schema",
      "渲染器",
    ],
    interviewerFocus: [
      "是否能设计稳定 schema 协议",
      "是否考虑渲染、校验、联动和提交分层",
      "是否能处理 schema 版本和组件扩展",
    ],
    answer: "低代码表单引擎我会先定义 schema 协议，包括字段类型、默认值、校验规则、布局、可见条件、数据源和权限。运行时分成 schema 解析层、组件渲染层、表单状态层、校验层和提交适配层。字段联动不能写成任意 JS 字符串直接执行，最好用受限表达式或规则 DSL，避免安全和不可维护问题。取舍上，配置能力越强，协议和调试成本越高，所以 MVP 应优先覆盖高频字段和常见联动。落地要有 schema 版本号、迁移脚本、预览调试面板和错误兜底。验证时用典型表单模板、极端字段数、联动链路和历史 schema 回放测试。",
    oralAnswer: "低代码表单引擎我会先定义 schema 协议，包括字段类型、默认值、校验规则、布局、可见条件、数据源和权限。运行时分成 schema 解析层、组件渲染层、表单状态层、校验层和提交适配层。字段联动不能写成任意 JS 字符串直接执行，最好用受限表达式或规则 DSL，避免安全和不可维护问题。取舍上，配置能力越强，协议和调试成本越高，所以 MVP 应优先覆盖高频字段和常见联动。落地要有 schema 版本号、迁移脚本、预览调试面板和错误兜底。验证时用典型表单模板、极端字段数、联动链路和历史 schema 回放测试。",
    keyPoints: [
      "schema 是核心协议",
      "渲染校验联动要分层",
      "避免执行任意 JS",
      "schema 版本需要治理",
    ],
    followUps: [
      {
        question: "字段联动如何避免循环依赖？",
        answerHint: "可把依赖关系建图，保存前做环检测，运行时按拓扑顺序计算。",
      },
      {
        question: "低代码表单如何支持自定义组件？",
        answerHint: "通过组件注册协议约束 props、value、onChange、校验和配置面板。",
      },
    ],
    scene: "业务需要让运营通过配置搭建审批、报名、问卷等表单，支持字段联动、远程选项、权限控制和多端渲染。",
  },
  {
    id: "project-streaming-ai-chat-component",
    title: "如何设计流式 AI Chat 组件",
    summary: "考察流式协议、增量渲染、中断恢复、滚动体验和错误处理。",
    shortAnswer: "考察流式协议、增量渲染、中断恢复、滚动体验和错误处理。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "AI Chat",
      "流式响应",
      "SSE",
      "中断恢复",
    ],
    interviewerFocus: [
      "是否能设计流式数据协议和 UI 状态",
      "是否考虑停止、重试和失败恢复",
      "是否能处理自动滚动和长消息性能",
    ],
    answer: "我会把 AI Chat 拆成协议层、状态层和展示层。协议可以用 SSE 或 fetch stream，消息按 delta 增量返回，前端维护 messageId、status、content、error 和 abortController。用户点击停止时要 abort 请求，并把消息标记为 stopped；失败时保留已生成内容，允许从当前上下文重试。UI 上要处理自动滚动但不打扰用户手动向上查看，长消息用分段渲染或 markdown 增量解析，避免每个 token 都触发大范围重渲染。验证时模拟慢网、断流、重复消息、停止、重试和超长回答，观察状态是否一致。",
    oralAnswer: "我会把 AI Chat 拆成协议层、状态层和展示层。协议可以用 SSE 或 fetch stream，消息按 delta 增量返回，前端维护 messageId、status、content、error 和 abortController。用户点击停止时要 abort 请求，并把消息标记为 stopped；失败时保留已生成内容，允许从当前上下文重试。UI 上要处理自动滚动但不打扰用户手动向上查看，长消息用分段渲染或 markdown 增量解析，避免每个 token 都触发大范围重渲染。验证时模拟慢网、断流、重复消息、停止、重试和超长回答，观察状态是否一致。",
    keyPoints: [
      "协议层处理 delta",
      "状态要区分生成中、停止、失败",
      "AbortController 支持中断",
      "长消息要控制渲染成本",
    ],
    followUps: [
      {
        question: "为什么不能每个 token 都 setState 整个消息列表？",
        answerHint: "会造成频繁重渲染，长回答下明显影响 INP 和滚动体验。",
      },
      {
        question: "SSE 和 WebSocket 如何取舍？",
        answerHint: "单向流式输出 SSE 简单稳定，双向实时协作或多路复用可考虑 WebSocket。",
      },
    ],
    scene: "产品要做一个 AI 助手，支持用户连续对话、流式输出、停止生成、重试、复制答案和消息历史恢复。",
  },
  {
    id: "project-analytics-sdk-design",
    title: "如何设计前端埋点 SDK",
    summary: "考察事件模型、批量上报、可靠性、性能、隐私和类型约束。",
    shortAnswer: "考察事件模型、批量上报、可靠性、性能、隐私和类型约束。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "埋点 SDK",
      "上报",
      "可靠性",
      "类型安全",
    ],
    interviewerFocus: [
      "是否能设计事件模型和公共字段",
      "是否考虑批量、重试、离线和页面卸载",
      "是否重视隐私、安全和性能开销",
    ],
    answer: "埋点 SDK 我会先定义事件模型：事件名、时间、页面、用户匿名标识、会话、业务 payload 和 traceId。采集层提供 track、pageView、exposure 等 API，队列层负责批量、节流、重试和失败缓存，发送层优先用 sendBeacon 处理卸载上报，普通场景用 fetch。取舍上，实时性和性能要平衡，高频事件不能每次都发请求；隐私上要脱敏，避免采集敏感字段。落地时用 TypeScript 约束事件名和 payload，配合采样和开关。验证要看丢失率、重复率、上报耗时、页面卸载成功率和异常情况下是否阻塞主流程。",
    oralAnswer: "埋点 SDK 我会先定义事件模型：事件名、时间、页面、用户匿名标识、会话、业务 payload 和 traceId。采集层提供 track、pageView、exposure 等 API，队列层负责批量、节流、重试和失败缓存，发送层优先用 sendBeacon 处理卸载上报，普通场景用 fetch。取舍上，实时性和性能要平衡，高频事件不能每次都发请求；隐私上要脱敏，避免采集敏感字段。落地时用 TypeScript 约束事件名和 payload，配合采样和开关。验证要看丢失率、重复率、上报耗时、页面卸载成功率和异常情况下是否阻塞主流程。",
    keyPoints: [
      "定义统一事件模型",
      "队列批量和失败重试",
      "卸载场景用 sendBeacon",
      "类型约束和隐私脱敏",
    ],
    followUps: [
      {
        question: "曝光埋点如何避免重复上报？",
        answerHint: "用 IntersectionObserver 加曝光阈值、去重 key 和生命周期策略控制。",
      },
      {
        question: "埋点 SDK 失败是否应该影响业务？",
        answerHint: "通常不应该，埋点要降级静默失败或缓存重试，不能阻塞主链路。",
      },
    ],
    scene: "公司多个前端应用需要统一埋点 SDK，支持曝光、点击、页面停留、性能指标和错误事件上报。",
  },
  {
    id: "project-component-library-design",
    title: "如何设计企业级前端组件库",
    summary: "考察组件分层、主题系统、可访问性、文档、测试和发布。",
    shortAnswer: "考察组件分层、主题系统、可访问性、文档、测试和发布。",
    category: "project",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "组件库",
      "设计系统",
      "主题",
      "发布",
    ],
    interviewerFocus: [
      "是否能区分基础组件、业务组件和模板",
      "是否考虑主题、可访问性和 API 稳定性",
      "是否有测试、文档和版本策略",
    ],
    answer: "组件库我会分层建设：基础组件保证通用交互和可访问性，业务组件封装公司特定场景，页面模板沉淀组合经验。底层要有设计 token 和主题系统，避免颜色、间距、圆角散落在组件里；API 要稳定、可组合，避免大量布尔 props。落地上需要文档站、示例、单测、视觉回归、变更日志和 semver 发布。取舍是组件库不能追求覆盖所有业务细节，否则会变得臃肿，复杂业务应允许在基础组件上组合。验证看接入成本、复用率、缺陷率和版本升级破坏性。",
    oralAnswer: "组件库我会分层建设：基础组件保证通用交互和可访问性，业务组件封装公司特定场景，页面模板沉淀组合经验。底层要有设计 token 和主题系统，避免颜色、间距、圆角散落在组件里；API 要稳定、可组合，避免大量布尔 props。落地上需要文档站、示例、单测、视觉回归、变更日志和 semver 发布。取舍是组件库不能追求覆盖所有业务细节，否则会变得臃肿，复杂业务应允许在基础组件上组合。验证看接入成本、复用率、缺陷率和版本升级破坏性。",
    keyPoints: [
      "组件库要分层",
      "设计 token 支撑主题",
      "API 稳定且可组合",
      "文档测试发布缺一不可",
    ],
    followUps: [
      {
        question: "业务组件是否应该放进基础组件库？",
        answerHint: "高复用且稳定的可以沉淀，强业务定制应放业务包或模板层。",
      },
      {
        question: "如何控制 breaking change？",
        answerHint: "遵守 semver、提供迁移文档、codemod 和废弃周期。",
      },
    ],
    scene: "多个业务线重复造组件，视觉和交互不一致，需要建设统一组件库并支持主题、文档和版本发布。",
  },
  {
    id: "project-frontend-monitoring-system",
    title: "如何设计前端监控系统",
    summary: "考察错误、性能、行为、采样、聚合、告警和定位闭环。",
    shortAnswer: "考察错误、性能、行为、采样、聚合、告警和定位闭环。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "前端监控",
      "错误上报",
      "性能",
      "告警",
    ],
    interviewerFocus: [
      "是否能覆盖错误、性能和用户行为",
      "是否考虑采样、去重、聚合和告警",
      "是否能通过 source map 和上下文定位问题",
    ],
    answer: "前端监控系统要形成发现、定位、告警、修复的闭环。采集层覆盖 JS 错误、Promise rejection、资源加载错误、接口错误、Web Vitals、白屏和关键用户行为；上报层要做采样、批量、去重和离线缓存；服务端聚合时按应用、版本、页面、设备、用户影响数分组。定位上要上传 source map，关联 release、commit、用户路径和接口 trace。取舍上，采集越多越影响性能和隐私，所以要分级采样和脱敏。验证看错误捕获率、告警准确率、平均定位时间和监控 SDK 对主线程的影响。",
    oralAnswer: "前端监控系统要形成发现、定位、告警、修复的闭环。采集层覆盖 JS 错误、Promise rejection、资源加载错误、接口错误、Web Vitals、白屏和关键用户行为；上报层要做采样、批量、去重和离线缓存；服务端聚合时按应用、版本、页面、设备、用户影响数分组。定位上要上传 source map，关联 release、commit、用户路径和接口 trace。取舍上，采集越多越影响性能和隐私，所以要分级采样和脱敏。验证看错误捕获率、告警准确率、平均定位时间和监控 SDK 对主线程的影响。",
    keyPoints: [
      "覆盖错误性能行为",
      "上报要采样去重批量",
      "source map 关联版本定位",
      "告警看影响范围和趋势",
    ],
    followUps: [
      {
        question: "白屏监控如何实现？",
        answerHint: "可结合根节点内容、关键区域采样点、错误事件和超时策略综合判断。",
      },
      {
        question: "监控数据如何避免噪声过多？",
        answerHint: "按错误指纹聚合，设置影响用户数和趋势阈值，而不是单条就报警。",
      },
    ],
    scene: "线上应用偶发白屏和卡顿，团队缺少统一监控，无法快速知道影响范围、用户路径和具体版本。",
  },
  {
    id: "project-large-file-upload",
    title: "如何设计高可靠大文件上传",
    summary: "考察切片、并发、断点续传、秒传、校验和失败恢复。",
    shortAnswer: "考察切片、并发、断点续传、秒传、校验和失败恢复。",
    category: "project",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "大文件上传",
      "切片上传",
      "断点续传",
      "并发控制",
    ],
    interviewerFocus: [
      "是否能设计切片和并发上传流程",
      "是否考虑断点续传和秒传",
      "是否能处理失败重试、校验和合并",
    ],
    answer: "大文件上传我会按文件 hash 或分片 hash 建立上传会话。前端把文件切片，先询问服务端哪些分片已上传，实现秒传或断点续传；然后按并发上限上传缺失分片，失败分片做重试和退避，用户可暂停时 abort 正在上传任务。所有分片完成后通知服务端合并，并用文件 hash 或服务端校验确认完整性。取舍上，分片越小重试成本低但请求多，分片越大请求少但失败重传成本高；并发数也要兼顾浏览器限制和服务端压力。验证要覆盖断网、刷新、暂停恢复、重复上传和合并失败。",
    oralAnswer: "大文件上传我会按文件 hash 或分片 hash 建立上传会话。前端把文件切片，先询问服务端哪些分片已上传，实现秒传或断点续传；然后按并发上限上传缺失分片，失败分片做重试和退避，用户可暂停时 abort 正在上传任务。所有分片完成后通知服务端合并，并用文件 hash 或服务端校验确认完整性。取舍上，分片越小重试成本低但请求多，分片越大请求少但失败重传成本高；并发数也要兼顾浏览器限制和服务端压力。验证要覆盖断网、刷新、暂停恢复、重复上传和合并失败。",
    keyPoints: [
      "文件切片和上传会话",
      "支持秒传和断点续传",
      "并发上限和失败重试",
      "合并后校验完整性",
    ],
    followUps: [
      {
        question: "文件 hash 在前端计算会不会卡顿？",
        answerHint: "大文件 hash 应分片计算，必要时放到 Web Worker，避免阻塞主线程。",
      },
      {
        question: "如何展示准确进度？",
        answerHint: "按已上传分片和当前分片 progress 汇总，断点续传要计入已完成分片。",
      },
    ],
    scene: "用户需要上传数 GB 视频文件，网络不稳定，要求支持暂停、恢复、进度展示、失败重试和上传后校验。",
  },
  {
    id: "project-first-screen-performance-governance",
    title: "如何做一个大型应用的首屏性能治理",
    summary: "考察指标体系、瓶颈定位、资源治理、工程门禁和持续运营。",
    shortAnswer: "考察指标体系、瓶颈定位、资源治理、工程门禁和持续运营。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "首屏性能",
      "性能治理",
      "Web Vitals",
      "工程化",
    ],
    interviewerFocus: [
      "是否能从单点优化升级为治理体系",
      "是否有指标、预算、门禁和归因机制",
      "是否能平衡业务迭代和性能目标",
    ],
    answer: "首屏性能治理不能只靠一次优化，要先建立指标体系，比如 LCP、INP、CLS、首屏接口耗时、JS 体积和业务首屏完成时间，并按页面、版本、设备、网络分组。然后定位瓶颈：服务端响应、首屏接口、图片字体、JS 包体、hydration 或第三方脚本。落地上做资源预算、bundle diff、性能看板、CI 门禁和页面 owner 机制，高风险页面设性能基线。取舍是不能为了分数牺牲核心业务体验，优化要围绕用户路径。验证要看线上 P75 指标、慢用户比例和每次发布后的性能回归。",
    oralAnswer: "首屏性能治理不能只靠一次优化，要先建立指标体系，比如 LCP、INP、CLS、首屏接口耗时、JS 体积和业务首屏完成时间，并按页面、版本、设备、网络分组。然后定位瓶颈：服务端响应、首屏接口、图片字体、JS 包体、hydration 或第三方脚本。落地上做资源预算、bundle diff、性能看板、CI 门禁和页面 owner 机制，高风险页面设性能基线。取舍是不能为了分数牺牲核心业务体验，优化要围绕用户路径。验证要看线上 P75 指标、慢用户比例和每次发布后的性能回归。",
    keyPoints: [
      "先建立指标和 owner",
      "按页面版本设备分组",
      "资源预算和 CI 门禁防退化",
      "用线上 P75 验证治理效果",
    ],
    followUps: [
      {
        question: "性能治理如何推动多团队配合？",
        answerHint: "需要页面 owner、统一指标、可视化看板和发布门禁，把问题归因到负责团队。",
      },
      {
        question: "为什么性能预算比单次优化重要？",
        answerHint: "预算能防止后续迭代反弹，让性能成为持续约束。",
      },
    ],
    scene: "一个大型 React 应用首屏慢，页面多、团队多、资源复杂，需要建立可持续的性能治理机制。",
  },
  {
    id: "project-team-engineering-system",
    title: "如何设计团队前端工程化体系",
    summary: "考察规范、脚手架、CI、发布、监控、组件库和知识沉淀。",
    shortAnswer: "考察规范、脚手架、CI、发布、监控、组件库和知识沉淀。",
    category: "project",
    difficulty: "advanced",
    frequency: "medium",
    tags: [
      "工程化",
      "团队协作",
      "CI/CD",
      "规范",
    ],
    interviewerFocus: [
      "是否能从个人工程实践升级到团队体系",
      "是否覆盖规范、工具、质量和发布闭环",
      "是否能分阶段落地而不是一次性大而全",
    ],
    answer: "团队工程化我会从最影响效率和质量的链路开始：统一脚手架和项目模板，内置路由、样式、lint、typecheck、测试和发布配置；建立代码规范、分支规范、PR review 规范和 CI 质量门禁；沉淀组件库、工具包和监控 SDK，减少重复造轮子；发布层支持灰度、回滚和版本追踪。取舍上，不要一上来做大平台，而是先解决新项目初始化、构建发布、线上问题定位这些高频痛点。验证看新项目启动时间、CI 通过率、线上事故定位时间、组件复用率和发布失败率。",
    oralAnswer: "团队工程化我会从最影响效率和质量的链路开始：统一脚手架和项目模板，内置路由、样式、lint、typecheck、测试和发布配置；建立代码规范、分支规范、PR review 规范和 CI 质量门禁；沉淀组件库、工具包和监控 SDK，减少重复造轮子；发布层支持灰度、回滚和版本追踪。取舍上，不要一上来做大平台，而是先解决新项目初始化、构建发布、线上问题定位这些高频痛点。验证看新项目启动时间、CI 通过率、线上事故定位时间、组件复用率和发布失败率。",
    keyPoints: [
      "先解决高频痛点",
      "脚手架统一项目基线",
      "CI 和 review 保证质量",
      "组件库和监控提升复用与稳定性",
    ],
    followUps: [
      {
        question: "工程化规范如何避免流于形式？",
        answerHint: "规范要固化到工具和 CI 里，减少靠人工记忆执行。",
      },
      {
        question: "什么时候需要自研脚手架？",
        answerHint: "当团队项目有稳定共性，且通用模板无法覆盖组织规范和发布链路时。",
      },
    ],
    scene: "团队从几个人扩展到几十人，项目数量增加，代码风格、发布流程、组件复用和线上质量开始失控。",
  },
  {
    id: "project-star-complex-project",
    title: "如何用 STAR 讲清楚最复杂的前端项目",
    summary: "考察背景、任务、行动、结果、技术取舍和个人贡献表达。",
    shortAnswer: "考察背景、任务、行动、结果、技术取舍和个人贡献表达。",
    category: "project",
    difficulty: "advanced",
    frequency: "high",
    tags: [
      "STAR",
      "项目经验",
      "面试表达",
      "复杂项目",
    ],
    interviewerFocus: [
      "是否能结构化表达复杂项目",
      "是否能讲清个人贡献和关键取舍",
      "是否能用数据证明结果",
    ],
    answer: "STAR 回答我会避免流水账。Situation 先交代业务背景和复杂度，比如用户规模、团队数量、历史问题；Task 讲清我的目标和约束，比如性能提升、稳定性治理或平台化；Action 重点讲关键方案和取舍，例如为什么选某种架构、如何分阶段落地、如何推动跨团队协作；Result 必须量化，比如 LCP 降低多少、构建耗时下降多少、线上错误率下降多少。资深视角还要补充复盘：方案有哪些不足，后续如何演进。面试官真正想听的是判断力、推进力和结果，而不是技术名词堆砌。",
    oralAnswer: "STAR 回答我会避免流水账。Situation 先交代业务背景和复杂度，比如用户规模、团队数量、历史问题；Task 讲清我的目标和约束，比如性能提升、稳定性治理或平台化；Action 重点讲关键方案和取舍，例如为什么选某种架构、如何分阶段落地、如何推动跨团队协作；Result 必须量化，比如 LCP 降低多少、构建耗时下降多少、线上错误率下降多少。资深视角还要补充复盘：方案有哪些不足，后续如何演进。面试官真正想听的是判断力、推进力和结果，而不是技术名词堆砌。",
    keyPoints: [
      "用 STAR 结构化表达",
      "突出个人贡献和取舍",
      "结果要量化",
      "补充复盘体现成熟度",
    ],
    followUps: [
      {
        question: "如果项目结果没有明确数据怎么办？",
        answerHint: "可以补充间接指标，如故障减少、交付周期缩短、复用率提升，但要诚实说明口径。",
      },
      {
        question: "如何避免把团队成果说成个人成果？",
        answerHint: "区分团队目标和个人负责的关键模块、决策、推动动作。",
      },
    ],
    scene: "资深前端面试中，面试官要求候选人讲一个最复杂、最有挑战、最能体现个人价值的项目。",
  },
]
