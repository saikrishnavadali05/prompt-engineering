import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  const topics = [
    {
      title: '🚀 1. Introduction',
      desc: 'Overview of prompt engineering and its importance.',
      bg: '#FDEBD0',
      link: '/docs/1-introduction'
    },
    {
      title: '🧠 2. Language Models',
      desc: 'Understand the foundation of LLMs powering prompts.',
      bg: '#D6EAF8',
      link: '/docs/2-language-models'
    },
    {
      title: '📌 3. Prompt Fundamentals',
      desc: 'Basics of prompt structure, clarity, and intent.',
      bg: '#E8DAEF',
      link: '/docs/3-prompt-fundamentals'
    },
    {
      title: '🔁 4. Prompt Patterns',
      desc: 'Explore reusable prompting templates and techniques.',
      bg: '#D5F5E3',
      link: '/docs/4-prompt-patterns'
    },
    {
      title: '⚙️ 5. Advanced Prompting',
      desc: 'Strategies like Chain-of-Thought and self-reflection.',
      bg: '#FADBD8',
      link: '/docs/5-advanced-prompting'
    },
    {
      title: '🔍 6. Evaluation & Iteration',
      desc: 'Methods to test and improve prompt performance.',
      bg: '#FCF3CF',
      link: '/docs/6-evaluation-iteration'
    },
    {
      title: '🏥 7. Domain-specific Prompting',
      desc: 'Tailoring prompts for healthcare, law, education, etc.',
      bg: '#F6DDCC',
      link: '/docs/7-domain-specific'
    },
    {
      title: '🤖 8. Model-specific Prompting',
      desc: 'Optimizing prompts for GPT, Claude, Gemini, etc.',
      bg: '#D1F2EB',
      link: '/docs/8-model-specific-prompt'
    },
    {
      title: '🛠️ 9. Tools & Frameworks',
      desc: 'Use LangChain, LlamaIndex, PromptLayer and others.',
      bg: '#FADBD8',
      link: '/docs/9-tools-frameworks'
    }
  ];

  return (
    <Layout title="Prompt Engineering" description="Craft better prompts for large language models">
      <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#4B0082' }}>
          🎯 Prompt Engineering Guide
        </h1>
        <p style={{ fontSize: '1.3rem', textAlign: 'center', color: '#555', marginTop: '1rem', marginBottom: '3rem' }}>
          Master the art of prompt design to unlock the full potential of language models like GPT.
        </p>

        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {topics.map((section) => (
            <Link
              key={section.title}
              to={section.link}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backgroundColor: section.bg,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#222' }}>
                  {section.title}
                </h2>
                <p style={{ color: '#333', fontSize: '1rem' }}>{section.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
