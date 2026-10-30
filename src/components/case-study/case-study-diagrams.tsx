import type { CaseStudyVisual } from "@/data/case-studies";

type DiagramProps = {
  kind: CaseStudyVisual;
  title: string;
  description: string;
};

function DiagramFrame({
  id,
  title,
  description,
  children,
}: Omit<DiagramProps, "kind"> & { id: string; children: React.ReactNode }) {
  return (
    <figure className={`case-study-diagram case-study-diagram--${id}`} aria-labelledby={`${id}-title`}>
      <svg
        viewBox="0 0 720 360"
        role="img"
        aria-labelledby={`${id}-title ${id}-description`}
        focusable="false"
      >
        <title id={`${id}-title`}>{title}</title>
        <desc id={`${id}-description`}>{description}</desc>
        {children}
      </svg>
      <figcaption>
        <span>DIAGRAM / {id.replace("-", " ").toUpperCase()}</span>
        {title}
      </figcaption>
      <p className="sr-only">{description}</p>
    </figure>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line className="diagram-arrow" x1={x1} y1={y1} x2={x2} y2={y2} />;
}

function Node({
  x,
  y,
  title,
  detail,
  accent = false,
  width = 148,
}: {
  x: number;
  y: number;
  title: string;
  detail: string;
  accent?: boolean;
  width?: number;
}) {
  return (
    <g transform={`translate(${x} ${y})`} className={`diagram-node${accent ? " diagram-node--accent" : ""}`}>
      <rect width={width} height="76" rx="1" />
      <text className="diagram-node-title" x="16" y="28">{title}</text>
      <text className="diagram-node-detail" x="16" y="50">{detail}</text>
    </g>
  );
}

export function CaseStudyDiagram({ kind, title, description }: DiagramProps) {
  if (kind === "workflow") {
    return (
      <DiagramFrame id="workflow" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">AGREEMENT / STATE TRANSITIONS</text>
        <Node x={28} y={130} title="CREATE" detail="draft agreement" accent />
        <Node x={202} y={130} title="INVITE" detail="add signers" />
        <Node x={376} y={130} title="SIGN" detail="IP + timestamp" accent />
        <Node x={550} y={130} title="RETAIN" detail="PDF + audit" />
        <Arrow x1={176} y1={168} x2={202} y2={168} />
        <Arrow x1={350} y1={168} x2={376} y2={168} />
        <Arrow x1={524} y1={168} x2={550} y2={168} />
        <text className="diagram-note" x="28" y="274">01</text>
        <text className="diagram-note" x="202" y="274">02</text>
        <text className="diagram-note" x="376" y="274">03</text>
        <text className="diagram-note" x="550" y="274">04</text>
      </DiagramFrame>
    );
  }

  if (kind === "model-orchestration") {
    return (
      <DiagramFrame id="model-orchestration" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">GREEN MODEL ADVISOR / ROUTING LOOP</text>
        <Node x={20} y={126} title="REQUEST" detail="task context" accent width={126} />
        <Node x={168} y={126} title="SIGNALS" detail="prompt needs" width={126} />
        <Node x={316} y={74} title="PROFILES" detail="capability + impact" width={132} />
        <Node x={316} y={178} title="POLICY" detail="route constraints" width={132} accent />
        <Node x={470} y={126} title="ROUTER" detail="explainable choice" accent width={130} />
        <Node x={614} y={126} title="RESPONSE" detail="trace returned" width={96} />
        <Arrow x1={146} y1={164} x2={168} y2={164} />
        <Arrow x1={294} y1={145} x2={316} y2={112} />
        <Arrow x1={294} y1={182} x2={316} y2={216} />
        <Arrow x1={448} y1={112} x2={470} y2={156} />
        <Arrow x1={448} y1={216} x2={470} y2={174} />
        <Arrow x1={600} y1={164} x2={614} y2={164} />
        <text className="diagram-note" x="20" y="314">OBSERVE → COMPARE → ROUTE → EXPLAIN</text>
      </DiagramFrame>
    );
  }

  if (kind === "carbon-energy") {
    return (
      <DiagramFrame id="carbon-energy" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">GREEN MODEL ADVISOR / CODECARBON OR FALLBACK</text>
        <Node x={24} y={112} title="REQUEST" detail="route + context" accent width={132} />
        <Node x={188} y={70} title="INFERENCE" detail="completion event" width={132} />
        <Node x={188} y={194} title="CODECARBON" detail="optional process tracking" accent width={132} />
        <Node x={352} y={132} title="FALLBACK" detail="model-based estimate" accent width={142} />
        <Node x={526} y={132} title="ESTIMATE" detail="energy + carbon output" width={158} />
        <Arrow x1={156} y1={150} x2={188} y2={108} />
        <Arrow x1={156} y1={150} x2={188} y2={232} />
        <Arrow x1={320} y1={108} x2={352} y2={166} />
        <Arrow x1={320} y1={232} x2={352} y2={178} />
        <Arrow x1={494} y1={170} x2={526} y2={170} />
        <text className="diagram-note" x="24" y="314">TRACK OR ESTIMATE / METHOD IS RECORDED</text>
      </DiagramFrame>
    );
  }

  if (kind === "benchmarking") {
    return (
      <DiagramFrame id="benchmarking" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">GREEN MODEL ADVISOR / BENCHMARK REVIEW</text>
        <text className="diagram-side-label" x="36" y="88">ROUTE OBSERVATIONS</text>
        <Node x={28} y={108} title="QUALITY" detail="task fit" accent width={126} />
        <Node x={28} y={204} title="LATENCY" detail="response time" width={126} />
        <Node x={178} y={108} title="COST" detail="request context" width={126} />
        <Node x={178} y={204} title="ENERGY" detail="usage context" accent width={126} />
        <Node x={328} y={156} title="COMPARE" detail="same task scope" accent width={148} />
        <Node x={506} y={108} title="REVIEW" detail="inspect axes" width={148} />
        <Node x={506} y={204} title="POLICY" detail="choose a route" accent width={148} />
        <path className="diagram-connector" d="M154 146H178M154 242H178M304 146H328M304 242H328M476 194H506M402 156V124H506M402 232V262H506" />
        <text className="diagram-note" x="28" y="326">NO SINGLE SCORE / CONTEXT STAYS ATTACHED</text>
      </DiagramFrame>
    );
  }

  if (kind === "green-architecture") {
    return (
      <DiagramFrame id="green-architecture" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">GREEN MODEL ADVISOR / SOURCE ARCHITECTURE</text>
        <rect className="diagram-boundary" x="22" y="60" width="196" height="224" rx="1" />
        <rect className="diagram-boundary diagram-boundary--presented" x="240" y="60" width="458" height="224" rx="1" />
        <text className="diagram-side-label" x="38" y="84">INTERFACE</text>
        <text className="diagram-side-label" x="256" y="84">FASTAPI SERVICE BOUNDARY</text>
        <Node x={48} y={124} title="REACT" detail="dashboard" accent width={144} />
        <Node x={48} y={214} title="REVIEW" detail="decision trace" width={144} />
        <Node x={256} y={112} title="ORCHESTRATE" detail="route policy" accent width={138} />
        <Node x={408} y={112} title="MEASURE" detail="energy + carbon" width={138} />
        <Node x={560} y={112} title="BENCHMARK" detail="compare routes" accent width={138} />
        <Node x={334} y={214} title="ADAPTERS" detail="explicit interfaces" width={150} />
        <Arrow x1={120} y1={200} x2={120} y2={214} />
        <Arrow x1={202} y1={162} x2={256} y2={150} />
        <Arrow x1={394} y1={150} x2={408} y2={150} />
        <Arrow x1={546} y1={150} x2={560} y2={150} />
        <path className="diagram-connector" d="M325 188V214M477 188V214M629 188V214M334 252H202V238" />
        <text className="diagram-note" x="38" y="268">REACT CLIENT SOURCE</text>
        <text className="diagram-note" x="256" y="268">FASTAPI / SOURCE SERVICE MAP</text>
      </DiagramFrame>
    );
  }

  if (kind === "trade-offs") {
    return (
      <DiagramFrame id="trade-offs" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">GREEN MODEL ADVISOR / DECISION REVIEW</text>
        <circle className="diagram-ring diagram-ring--outer" cx="360" cy="190" r="112" />
        <circle className="diagram-ring diagram-ring--middle" cx="360" cy="190" r="76" />
        <circle className="diagram-ring diagram-ring--inner" cx="360" cy="190" r="42" />
        <text className="diagram-ring-label" x="360" y="194" textAnchor="middle">ROUTE</text>
        <text className="diagram-side-label" x="108" y="112">CAPABILITY</text>
        <text className="diagram-side-label" x="500" y="112">QUALITY</text>
        <text className="diagram-side-label" x="108" y="264">LATENCY</text>
        <text className="diagram-side-label" x="500" y="264">ENERGY</text>
        <text className="diagram-side-detail" x="108" y="130">task fit</text>
        <text className="diagram-side-detail" x="500" y="130">response fit</text>
        <text className="diagram-side-detail" x="108" y="282">time context</text>
        <text className="diagram-side-detail" x="500" y="282">carbon context</text>
        <path className="diagram-connector" d="M198 118H248M472 118H422M198 270H248M472 270H422" />
        <text className="diagram-note" x="32" y="326">REVIEW THE BALANCE / KEEP UNCERTAINTY VISIBLE</text>
      </DiagramFrame>
    );
  }

  if (kind === "architecture") {
    return (
      <DiagramFrame id="architecture" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">DA AGREEMENT / SERVICE MAP</text>
        <Node x={34} y={78} title="CLIENT" detail="React + TypeScript" accent />
        <Node x={198} y={78} title="API" detail="Express REST API" accent />
        <Node x={362} y={78} title="AUTH" detail="middleware + JWT" />
        <Node x={526} y={78} title="DATA" detail="PostgreSQL" />
        <Arrow x1={182} y1={116} x2={198} y2={116} />
        <Arrow x1={346} y1={116} x2={362} y2={116} />
        <Arrow x1={510} y1={116} x2={526} y2={116} />
        <Node x={198} y={220} title="SERVICES" detail="PDF + email" />
        <Arrow x1={272} y1={154} x2={272} y2={220} />
        <text className="diagram-note" x="34" y="326">EXPLICIT BOUNDARIES / ONE REQUEST PATH</text>
      </DiagramFrame>
    );
  }

  if (kind === "neural-blueprint") {
    return (
      <DiagramFrame id="neural-blueprint" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">NEURAL BLUEPRINT / DECISION LOOP</text>
        <Node x={28} y={92} title="CONTEXT" detail="profile + goals" accent />
        <Node x={198} y={92} title="SKILL STATE" detail="evidence + level" />
        <Node x={368} y={92} title="GAP" detail="role comparison" accent />
        <Node x={538} y={92} title="PATH" detail="next actions" accent />
        <Arrow x1={176} y1={130} x2={198} y2={130} />
        <Arrow x1={346} y1={130} x2={368} y2={130} />
        <Arrow x1={516} y1={130} x2={538} y2={130} />
        <Node x={198} y={224} title="RETRIEVAL" detail="grounded context" />
        <Node x={368} y={224} title="AI MENTOR" detail="explain + adapt" accent />
        <Arrow x1={272} y1={168} x2={272} y2={224} />
        <Arrow x1={442} y1={168} x2={442} y2={224} />
        <path className="diagram-connector" d="M516 262H630V168" />
        <text className="diagram-note" x="32" y="326">OBSERVE → COMPARE → GROUND → ACT → REASSESS</text>
      </DiagramFrame>
    );
  }

  if (kind === "neural-workflow") {
    return (
      <DiagramFrame id="neural-workflow" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">NEURALIXAI / LEARNER REQUEST PATH</text>
        <Node x={18} y={124} title="PROFILE" detail="goal + constraints" accent />
        <Node x={152} y={124} title="ASSESS" detail="skill domains" />
        <Node x={286} y={124} title="PARSE" detail="structured skills" accent />
        <Node x={420} y={124} title="RETRIEVE" detail="hybrid context" />
        <Node x={554} y={124} title="RECOMMEND" detail="ranked path" accent />
        <Arrow x1={166} y1={162} x2={152} y2={162} />
        <Arrow x1={300} y1={162} x2={286} y2={162} />
        <Arrow x1={434} y1={162} x2={420} y2={162} />
        <Arrow x1={568} y1={162} x2={554} y2={162} />
        <path className="diagram-connector" d="M628 200V260H360V200" />
        <Node x={286} y={240} title="MENTOR" detail="ask / what-if" accent />
        <text className="diagram-note" x="18" y="326">FEEDBACK LOOP / PLAN IS REVISABLE</text>
      </DiagramFrame>
    );
  }

  if (kind === "ai-rag") {
    return (
      <DiagramFrame id="ai-rag" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">AI / HYBRID RETRIEVAL + GENERATION</text>
        <Node x={26} y={112} title="QUERY" detail="learner intent" accent />
        <Node x={198} y={70} title="LEXICAL" detail="keyword search" />
        <Node x={198} y={194} title="VECTOR" detail="semantic search" accent />
        <Node x={370} y={132} title="MERGE" detail="rank + filter" accent />
        <Node x={542} y={132} title="GEMINI" detail="grounded answer" accent />
        <Arrow x1={174} y1={150} x2={198} y2={108} />
        <Arrow x1={174} y1={150} x2={198} y2={232} />
        <Arrow x1={346} y1={108} x2={370} y2={166} />
        <Arrow x1={346} y1={232} x2={370} y2={174} />
        <Arrow x1={518} y1={170} x2={542} y2={170} />
        <text className="diagram-note" x="26" y="314">INDIA-FIRST KNOWLEDGE BASE / PROVENANCE + FRESHNESS</text>
        <text className="diagram-side-detail" x="542" y="238">citations + uncertainty</text>
      </DiagramFrame>
    );
  }

  if (kind === "skill-gap") {
    return (
      <DiagramFrame id="skill-gap" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">SKILL GAP / EVIDENCE TO ACTION</text>
        <text className="diagram-side-label" x="34" y="84">CURRENT EVIDENCE</text>
        <text className="diagram-side-label" x="286" y="84">TARGET ROLE</text>
        <text className="diagram-side-label" x="538" y="84">NEXT ACTION</text>
        <Node x={28} y={108} title="REACT" detail="working projects" accent />
        <Node x={28} y={204} title="PYTHON" detail="guided practice" />
        <Node x={280} y={108} title="REACT" detail="production fluency" />
        <Node x={280} y={204} title="PYTHON" detail="API + testing" accent />
        <Node x={532} y={108} title="SHIP UI" detail="review + deploy" accent />
        <Node x={532} y={204} title="BUILD API" detail="small project" />
        <path className="diagram-connector" d="M176 146H280M428 146H532M176 242H280M428 242H532" />
        <text className="diagram-note" x="28" y="326">GAPS ARE DIRECTIONAL / NOT CREDENTIALS</text>
      </DiagramFrame>
    );
  }

  if (kind === "neural-architecture") {
    return (
      <DiagramFrame id="neural-architecture" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">ARCHITECTURE / VERIFIED CORE + PRESENTED CLOUD PATH</text>
        <rect className="diagram-boundary" x="22" y="62" width="214" height="222" rx="1" />
        <rect className="diagram-boundary diagram-boundary--presented" x="258" y="62" width="440" height="222" rx="1" />
        <text className="diagram-side-label" x="38" y="86">VERIFIED IMPLEMENTATION</text>
        <text className="diagram-side-label" x="274" y="86">PRESENTED CLOUD ARCHITECTURE</text>
        <Node x={48} y={120} title="REACT" detail="client" accent />
        <Node x={48} y={210} title="FASTAPI" detail="REST backend" accent />
        <Node x={274} y={120} title="API" detail="service boundary" width={132} />
        <Node x={414} y={120} title="HYBRID RAG" detail="retrieve + rank" accent width={132} />
        <Node x={554} y={120} title="GEMINI" detail="Vertex AI" accent width={132} />
        <Node x={366} y={210} title="VECTOR INDEX" detail="semantic search" />
        <Node x={532} y={210} title="KNOWLEDGE" detail="India-first" />
        <Arrow x1={122} y1={196} x2={122} y2={210} />
        <Arrow x1={406} y1={158} x2={414} y2={158} />
        <Arrow x1={546} y1={158} x2={554} y2={158} />
        <path className="diagram-connector" d="M358 158H366V210M480 196V210M498 248H532" />
        <text className="diagram-note" x="38" y="268">BUILT / OBSERVED</text>
        <text className="diagram-note" x="274" y="268">PROPOSED / NOT VERIFIED AS DEPLOYED</text>
      </DiagramFrame>
    );
  }

  if (kind === "security") {
    return (
      <DiagramFrame id="security" title={title} description={description}>
        <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
        <text className="diagram-overline" x="32" y="34">SIGNING / EVIDENCE CHAIN</text>
        <circle className="diagram-ring diagram-ring--outer" cx="252" cy="190" r="112" />
        <circle className="diagram-ring diagram-ring--middle" cx="252" cy="190" r="78" />
        <circle className="diagram-ring diagram-ring--inner" cx="252" cy="190" r="44" />
        <text className="diagram-ring-label" x="252" y="194" textAnchor="middle">AGREEMENT</text>
        <text className="diagram-side-label" x="406" y="108">01 / AUTHENTICATE</text>
        <text className="diagram-side-label" x="406" y="154">02 / AUTHORIZE</text>
        <text className="diagram-side-label" x="406" y="200">03 / CAPTURE</text>
        <text className="diagram-side-label" x="406" y="246">04 / RETAIN</text>
        <text className="diagram-side-detail" x="406" y="127">JWT · bcrypt · Google OAuth</text>
        <text className="diagram-side-detail" x="406" y="173">creator ownership checks</text>
        <text className="diagram-side-detail" x="406" y="219">IP address · timestamp</text>
        <text className="diagram-side-detail" x="406" y="265">generated PDF · audit events</text>
        <path className="diagram-connector" d="M364 190H390" />
      </DiagramFrame>
    );
  }

  return (
    <DiagramFrame id="data-model" title={title} description={description}>
      <path className="diagram-grid" d="M0 72H720M0 144H720M0 216H720M0 288H720M72 0V360M144 0V360M216 0V360M288 0V360M360 0V360M432 0V360M504 0V360M576 0V360M648 0V360" />
      <text className="diagram-overline" x="32" y="34">RECORDS / RELATIONSHIPS</text>
      <Node x={32} y={74} title="USER" detail="identity" accent />
      <Node x={286} y={74} title="AGREEMENT" detail="root record" accent />
      <Node x={32} y={226} title="SIGNER" detail="participant" />
      <Node x={286} y={226} title="DOCUMENT" detail="stored file" />
      <Node x={540} y={226} title="AUDIT" detail="activity record" />
      <path className="diagram-connector" d="M180 112H286M106 150V226M360 150V226M434 112H614V226M434 264H540" />
      <circle className="diagram-junction" cx="286" cy="112" r="4" />
      <circle className="diagram-junction" cx="434" cy="112" r="4" />
      <text className="diagram-note" x="32" y="334">USER → AGREEMENT → SIGNER / DOCUMENT / AUDIT</text>
    </DiagramFrame>
  );
}
