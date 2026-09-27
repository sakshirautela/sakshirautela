# Deep Dive into Transformer Architectures & Self-Attention

Transformers have revolutionized Natural Language Processing and Computer Vision. Introduced in the landmark paper *"Attention Is All You Need"* (Vaswani et al., 2017), the architecture relies entirely on self-attention mechanisms.

---

## 1. Scaled Dot-Product Attention

The core formula of attention is defined as:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

Where:
- **Q (Query)**: Represents what we are looking for.
- **K (Key)**: Represents what information is available.
- **V (Value)**: The actual content extracted based on the attention weight.

---

## 2. Multi-Head Attention

Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions:

```python
import torch
import torch.nn as nn

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.q_linear = nn.Linear(d_model, d_model)
        self.k_linear = nn.Linear(d_model, d_model)
        self.v_linear = nn.Linear(d_model, d_model)
        self.out = nn.Linear(d_model, d_model)
        
    def forward(self, q, k, v, mask=None):
        bs = q.size(0)
        # perform linear operation and split into num_heads
        k = self.k_linear(k).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        q = self.q_linear(q).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        v = self.v_linear(v).view(bs, -1, self.num_heads, self.d_k).transpose(1,2)
        
        # calculate attention
        scores = torch.matmul(q, k.transpose(-2, -1)) / (self.d_k ** 0.5)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(weights, v)
        
        # concatenate heads and pass through final linear layer
        concat = output.transpose(1,2).contiguous().view(bs, -1, self.num_heads * self.d_k)
        return self.out(concat)
```

---

## 3. Why Transformers Outperform RNNs & LSTMs
1. **Parallelization**: Sequential computation in RNNs prevents GPU parallelization during training.
2. **Long-range Dependencies**: Attention has constant $O(1)$ path length between any two tokens, eliminating the vanishing gradient problem over long sequences.
