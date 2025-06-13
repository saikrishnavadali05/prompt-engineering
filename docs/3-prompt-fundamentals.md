---
id: 3-prompt-fundamentals
title: Prompt Fundamentals
slug: /3-prompt-fundamentals
---


# 3. Prompt Fundamentals

Understanding the fundamentals of prompting is crucial for getting the best results from language models.

---

## 🔹 What is a Prompt?
A **prompt** is the input text you provide to a language model to elicit a response. It can be as simple as a question or as complex as a structured instruction.

### 📌 Example:
```
Translate the following English sentence to French: "Good morning!"
```

## 🔹 Types of Prompts
There are several types of prompts depending on what you're trying to achieve:

- **Instruction-based**: "Summarize this paragraph..."
- **Input-output examples**: "Q: What is 2+2? A: 4"
- **Few-shot**: Providing a few examples before asking the model to perform a task.

## 🔹 Prompt Format
A good prompt typically consists of:
- **Context**: Background or setup.
- **Instruction**: What you want the model to do.
- **Examples (optional)**: Few-shot examples.
- **Input**: The actual user query or data.

## 🧠 Prompt Best Practices

| Tip | Description |
|-----|-------------|
| ✅ Be specific | Clearly state what you want. |
| ✅ Use delimiters | Separate different parts with quotes or markers. |
| ✅ Test variations | Try multiple phrasings for better performance. |

---

## 🔸 Prompt Failures & Fixes

| Problem | Fix |
|--------|------|
| Model misunderstands intent | Rephrase or simplify the instruction |
| Output is too long or short | Use instructions like “limit to 2 sentences” |
| Inconsistent style | Give explicit style examples |

---

## 🔹 Real-World Example
**Prompt:**
```
Write a professional email apologizing for a delay in project delivery.
```

**Model Output:**
> Dear [Client],  
> I sincerely apologize for the delay in delivering the project. We are working diligently to complete it at the earliest...

---

Mastering prompt fundamentals builds the base for more advanced techniques and consistent performance across tasks.