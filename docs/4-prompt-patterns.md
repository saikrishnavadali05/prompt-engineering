# 4. Prompt Patterns and Techniques

Prompt patterns are reusable strategies or templates for crafting prompts that help steer the behavior of language models. By recognizing and applying common patterns, you can improve output consistency and model accuracy.

---

## 🎯 Why Patterns Matter

- **Reduces guesswork:** Proven templates save time.
- **Improves accuracy:** Well-framed prompts lead to better responses.
- **Enables scaling:** Easier to teach and replicate across teams.

---

## 🧩 Common Prompt Patterns

### 1. **Instruction Pattern**

Provides clear directives on what you want the model to do.

**Example:**
```
Summarize the following article in one paragraph.
```

---

### 2. **Q&A Pattern**

Pose a question and expect a direct answer.

**Example:**
```
What is the capital of Australia?
```

---

### 3. **Few-shot Example Pattern**

Provide 2–3 examples to help the model infer the task pattern.

**Example:**
```
Input: I’m feeling overwhelmed.
Response: You’re not alone—talk to someone you trust.

Input: I failed my test.
Response: Failure is a step toward success.

Input: My friend is ignoring me.
Response:
```

---

### 4. **Role Prompting**

Ask the model to behave like a specific role.

**Example:**
```
You are a senior frontend developer. Suggest improvements for this HTML code snippet:
```

---

### 5. **Chain-of-Thought Prompting**

Encourages the model to explain reasoning step-by-step.

**Example:**
```
Q: If a train leaves the station at 3 PM going 60 km/h and another at 4 PM going 90 km/h, when will they meet?
Let’s think step by step.
```

---

### 6. **Delimiters Pattern**

Use triple quotes or delimiters to clearly define input sections.

**Example:**
```
Summarize the text between triple quotes:
"""
The quick brown fox jumps over the lazy dog...
"""
```

---

### 7. **Refusal Pattern**

Prevent misuse by explicitly instructing refusal for certain queries.

**Example:**
```
If the user asks for personal data, reply: “Sorry, I can’t share that.”
```

---

## 🔁 Prompt Pattern Matrix

| Pattern               | Best Use Case                          | Risk/Challenge              |
|-----------------------|----------------------------------------|-----------------------------|
| Instruction           | General tasks                          | May need specificity        |
| Q&A                   | Factual questions                      | May hallucinate facts       |
| Few-shot              | Pattern learning, formatting tasks     | Increases token cost        |
| Role Prompting        | Domain-specific answers                | Requires clear role definition |
| Chain-of-Thought      | Complex reasoning                      | Might generate verbose output |
| Delimiters            | Precise input formatting               | Model might ignore delimiters |
| Refusal               | Safety, guardrails                     | Needs consistent phrasing   |

---

## 🛠️ Tips for Applying Patterns

- Combine patterns for stronger results (e.g., role + chain-of-thought).
- Use formatting (e.g., bullet points, tables) to improve readability.
- Always test and iterate with real examples.

---

## 🧪 Mini Task

Try applying 2 different prompt patterns to the following task:

> "Help me prepare a 2-minute speech on time management."

See how the results vary with different styles.

---

By understanding these patterns, you gain an essential toolkit to make your prompts more deliberate, flexible, and robust.

