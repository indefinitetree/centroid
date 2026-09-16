## Grover's Search (Revisit): 

> [!Problem]
> Given $f:\{0,1\}^n \rightarrow \{0,1\}$ , find a $x$ such that $f(x) = 1$ under the quantum query model 

Consider 
$$ |\psi \rangle = \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} g(x) |x\rangle $$
From the Grover's search algorithm, we previously defined the diffusion operator $D$ as 
$$ D = 2 | s \rangle \langle s | - I$$
and $$ D |\psi \rangle = \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} (2 \mu - g(x))|x \rangle$$
where $\mu$ is the average amplitude of $|\psi \rangle$ . 

Let's try to understand this using fourier representation. Remember that the fourier coefficient of $f(x)$ corresponding to the basis $\mathcal{X}_{s}(x)$ is given by
$$ \hat g(s) = \mathbb{E} [\mathcal{X}_s(x)f(x)]$$
Therefore, we can write
$$\mu = \dfrac{1}{N} \sum_{x \in \{0,1\}^n} g(x) $$
$$= \hat g(\phi) = \hat g(0^n) $$
If we think in terms of fourier transforms, we need the following transform:
$$ g(x) \mapsto 2 \mu - g(x)$$
But, we can write $2 \mu - g(x)$ as 
$$= \mu \mathcal{X}_{\phi}(x) - (g(x) - \mu \mathcal{X}_{\phi}(x)) $$
since $\mathcal{X}_{\phi}(x) = 1 , ~ \forall x$ . Writing $g(x)$ in the fourier basis, we get 
$$ g(x) = \sum_{y \in \{0 , 1\}^n} \hat g(y) \mathcal{X}_y(x)$$
$$ = \hat g(0^n) \mathcal{X}_{\phi}(x) + \sum_{\substack{y \neq 0^n \\ y \in \{0 , 1\}^n} } \hat g(y) \mathcal{X}_y(x) $$
$$ = \mu \mathcal{X}_{\phi}(x) + \sum_{\substack{y \neq 0^n \\ y \in \{0 , 1\}^n} } \hat g(y) \mathcal{X}_y(x)  $$
Therefore, consider the following set of transformations:
```
- Apply fourier transform (using H)
- Negate all fourier coefficients other than the one corresponding to empty subset 
- Apply fourier transform to revert back (using H)
```
It is easy to see that the above set of transformations does the following map: $g(x) \mapsto 2\mu - g(x)$ . This gives us the implementation of $D$ as follows 
$$D = H^{\otimes n} J H^{\otimes n} $$
where 
$$ J|x\rangle = \begin{cases} |x\rangle , \text{if } x = 0^n \\ -|x\rangle , \text{otherwise} \end{cases}$$
Thus, we don't really need $|s\rangle$ at the first place to construct $D$.  The diffusion operator falls naturally once we analyse through fourier transformations, since under the hood, both of them utilize the average of the function over the inputs. 

## Bernstein-Vazirani Problem (Revisit):
> [!Problem]
> Given $f:\{0,1\}^n \rightarrow \{0,1\}$  such that $$ f(x) = ax +b \bmod 2 $$ where $a \in \{0,1\}^n$ , $b\in \{0,1\}$ and $$ ax = \sum_{i=1}^n a_i x_i$$  find the values of $a$ and $b$. 

We solved the problem in the following manner (assuming $b=0$) - we started with $0^n$ , then applied $H^{\otimes n}$ once, use phase-kickback $(U_f(x , |-\rangle))$ and then apply $H^{\otimes n}$ once again. After this, we do a measurement and the result of the measurement will be equal to $a$.

We know, from previously that $H^{\otimes n}$ spreads the fourier coefficients of the coefficient function across all the qubits, i.e., 
$$H^{\otimes n} |0^n \rangle = \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} |x \rangle$$
$$ \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} |x \rangle \xrightarrow[\text{phase-kickback}]{\text{apply }U_f} \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} (-1)^{f(x)}|x \rangle$$
$$ \dfrac{1}{\sqrt{N}} \sum_{x \in \{0,1\}^n} (-1)^{f(x)}|x \rangle \xrightarrow[\text{fourier transform}]{\text{apply }H^{\otimes n}} \sum_{y \in \{0 ,1\}^n} \hat g(y) |y \rangle $$
where $g(x) = (-1)^{f(x)}$ and $\hat g(y)$ is the fourier coefficient of $g(x)$ corresponding to the basis $y$.

Since $g(x) = (-1)^{\sum_{i=1}^n a_i x_i}$ , $g(x)$ can be thought as $\mathcal{X}_{S_a}(x)$ , where $S_a(x)$ is the subset corresponding to characterstic vector $a$. We know that 
$$ \hat g(s) = \mathbb{E} [\mathcal{X}_s(x)g(x)]$$
Since, the basis vectors are orthogonal and $g(x)$ itself is a basis vector, therefore 
$$ \hat g(y) = \begin{cases}1 , \text{if } y = a \\ 0 , \text{otherwise} \end{cases} $$
Therefore, measurement at this stage will yield $a$ with probability $1$. 

