import {
  Item, Rule, BrandLogo, Photo, SalaryTable,
} from './components.jsx'
import GridField from './GridField.jsx'

/* ============================================================
   SLIDE DEFINITIONS
   meta: { dark, center, section, chapter } drives chrome + theme.
   Dark slides are deliberate act-breaks (title, dividers, close).
   No section-number eyebrows; the running header carries context.
   No em-dashes anywhere. Separators rationed.

   Structure:
     Open      : Title, Who we are
     Part 1    : Paying you (div) / Go past the minimum / High expectations / CFO
     Part 2    : Focus your fire (div) / Know the role / Smart negotiation / Salary
     Part 3    : 90-day reality (div) / Staying ahead / Capstone
     Close     : Questions
   ============================================================ */

export const SLIDES = [
  /* 01 — TITLE ------------------------------------------------ */
  {
    id: 'title',
    dark: true,
    center: true,
    section: 'Open',
    Content: () => (
      <>
        <GridField />
        <Item i={0}><BrandLogo white height="clamp(64px, 8vw, 104px)" /></Item>
        <Item i={1} as="h1" className="displg" style={{ marginTop: 32 }}>
          The Reality Check.
        </Item>
        <Item i={2} className="sub" style={{ maxWidth: '50ch', marginTop: 22 }}>
          What we wish someone had told us before graduation.
        </Item>
      </>
    ),
  },

  /* 02 — WHO WE ARE (split: photo + text) --------------------- */
  {
    id: 'who',
    section: 'Open',
    Content: () => (
      <div className="cols">
        <Photo src="/assets/team.jpg" ratio="16 / 9"
          alt="Claudia, Nani and Vanes" caption="Las chicas, G3" />
        <div className="col">
          <Item i={2} as="h2" className="hlg">
            Claudia, Nani &amp; Vanes.
          </Item>
          <Item i={3}><Rule style={{ marginTop: 28 }} /></Item>
          <Item i={4} className="body lead">
            Three G3 grads from laschicas.ai, here to give it to you straight.
            No theory. Just what the job felt like.
          </Item>
        </div>
      </div>
    ),
  },

  /* 03 — WHY WE'RE HERE --------------------------------------- */
  {
    id: 'why-here',
    section: 'Open',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Why we're here.
        </Item>
        <Item i={1}><Rule style={{ marginTop: 28 }} /></Item>
        <Item i={2} className="body lead">
          We've watched cohort after cohort hit the same walls after graduation.
          The same surprises on the job, the same offer decisions, the same rocky
          first 90 days.
        </Item>
        <Item i={3} className="body" style={{ marginTop: 12 }}>
          We pulled the patterns together so you can see them coming.
        </Item>
      </>
    ),
  },

  /* DIVIDER: OFFERS (dark) ------------------------------------ */
  {
    id: 'div-offers',
    dark: true,
    section: 'Offers',
    chapter: '1',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          Know what you're<br />signing up for.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          In the coming weeks, some of you will have multiple offers.
        </Item>
        <Item i={2} className="body" style={{ marginTop: 12 }}>
          Know what each role is asking, and how to negotiate it. More on both next.
        </Item>
      </>
    ),
  },

  /* 08 — KNOW THE ROLE ---------------------------------------- */
  {
    id: 'role',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          The role behind the title.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">The title tells you little. Ask what you'll own day to day.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">Is there a team around you, or are you the solo AI engineer?</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">You might think you're there to code when they want a PM.</span></Item>
          <Item i={4} className="row"><span className="mk">04</span><span className="tx">Stay flexible. The role they need may not be the one you pictured, and that's okay.</span></Item>
        </div>
      </>
    ),
  },

  /* 09 — SMART NEGOTIATION ------------------------------------ */
  {
    id: 'negotiate',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Every dollar raises the bar.
        </Item>
        <Item i={1}><Rule style={{ marginTop: 28 }} /></Item>
        <Item i={2} className="body lead">
          The people who earn above base bring real experience and judgment, not just
          good prompts. Every dollar you ask for raises what they expect from you.
        </Item>
      </>
    ),
  },

  /* 10 — SALARY ----------------------------------------------- */
  {
    id: 'salary',
    section: 'Offers',
    Content: () => (
      <>
        <Item i={0} as="h2" className="h" style={{ marginBottom: 6 }}>
          What the market pays.
        </Item>
        <SalaryTable />
        <Item i={3} className="cap">
          <b>More pay, more pressure.</b> Every extra dollar raises what they expect
          you to deliver. Set expectations you can sustain.
          <span className="src"> Source: Fonzi talent marketplace.</span>
        </Item>
      </>
    ),
  },

  /* CAPSTONE (text + stage photo) ----------------------------- */
  {
    id: 'capstone',
    section: 'Offers',
    Content: () => (
      <div className="cols">
        <div className="col">
          <Item i={0} as="h2" className="h">
            Make it your wow factor.
          </Item>
          <Item i={1} className="body">
            Make your capstone production-worthy. Make it make money. You're always
            interviewing, even once you have a job, and a project like this is how you
            build your network. That is what pushes your career forward.
          </Item>
        </div>
        <Photo src="/assets/stage.jpg" ratio="16 / 9"
          alt="Capstone demo on stage" caption="Capstone demo day, Build a D1 Athlete" i={1} />
      </div>
    ),
  },

  /* DIVIDER: THE JOB (dark) ----------------------------------- */
  {
    id: 'div-job',
    dark: true,
    section: 'The job',
    chapter: '2',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          Why they're<br />paying you.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          You're the AI expert in the room. They're paying for someone who knows
          what's possible this week, not last year.
        </Item>
        <Item i={2} className="body" style={{ marginTop: 12 }}>
          If you're not that person yet, get glued to Twitter. That's where the
          field moves first.
        </Item>
      </>
    ),
  },

  /* GO PAST THE MINIMUM --------------------------------------- */
  {
    id: 'beyond',
    section: 'The job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Go past the minimum.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">The minimum requirement is the floor, not the finish line. Go past it.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">Take advantage of the tokens. The compute is right there. Use it.</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">Essentials are handled, laundry, food, cleaning. Your time here is for building.</span></Item>
        </div>
      </>
    ),
  },

  /* HIGH EXPECTATIONS (dark) ---------------------------------- */
  {
    id: 'avengers',
    dark: true,
    section: 'The job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          They expect the Avengers.
        </Item>
        <Item i={1}><Rule style={{ marginTop: 28 }} /></Item>
        <Item i={2} className="body lead">
          Complex projects delivered in a few days, not a few months.
          That's the bar in their head the day you walk in.
        </Item>
      </>
    ),
  },

  /* DIVIDER: STAYING IN (dark) -------------------------------- */
  {
    id: 'div-stay',
    dark: true,
    section: 'Staying in the job',
    chapter: '3',
    Content: () => (
      <>
        <Item i={0} as="h2" className="disp">
          The 90-day<br />reality.
        </Item>
        <Item i={1} className="body lead" style={{ marginTop: 32 }}>
          The return policy is real, and it goes well beyond 90 days.
        </Item>
      </>
    ),
  },

  /* 12 — STAYING AHEAD (dark) --------------------------------- */
  {
    id: 'ahead',
    dark: true,
    section: 'Staying in the job',
    Content: () => (
      <>
        <Item i={0} as="h2" className="hlg">
          Job security is staying ahead.
        </Item>
        <div className="rows">
          <Item i={1} className="row"><span className="mk">01</span><span className="tx">The 90-day return policy is real, and it doesn't end at 90 days.</span></Item>
          <Item i={2} className="row"><span className="mk">02</span><span className="tx">Show up to AI events. Keep learning. Keep testing new tools.</span></Item>
          <Item i={3} className="row"><span className="mk">03</span><span className="tx">Build a network, and make it one that's useful.</span></Item>
        </div>
      </>
    ),
  },

  /* CLOSE (dark) ---------------------------------------------- */
  {
    id: 'close',
    dark: true,
    center: true,
    section: 'Close',
    Content: () => (
      <>
        <Item i={0} className="kicker">Questions?</Item>
        <Item i={1} as="h2" className="disp">
          Now go survive the job.
        </Item>
        <Item i={2} className="stack" style={{ marginTop: 34 }}>
          <span className="names">Claudia, Nani and Vanes</span>
          <BrandLogo white height="clamp(40px, 5vw, 60px)" />
        </Item>
      </>
    ),
  },
]
