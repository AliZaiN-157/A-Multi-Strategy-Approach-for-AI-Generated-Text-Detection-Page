import type { SectionData } from './types';

export const sectionsData: SectionData[] = [
  {
    id: 'abstract',
    title: 'Abstract & Introduction',
    content: [
      `This paper presents and discusses our approaches to the shared task challenge M-DAIGT on detecting AI generated content (Lamsiyah et al., 2025). We participated in two subtasks: Subtask 1, focusing on news articles, and Subtask 2, focusing on academic abstracts. Our submission is based on three distinct architectural approaches: (1) Fine-tuning a RoBERTa-base model, (2) A TF-IDF based system with a Linear Support Vector Machine (SVM) classifier (Opitz and Maclin, 1999), and (3) An experimental system named Candace, which leverages probabilistic features extracted from multiple Llama-3.2 models (1B and 3B variants) (W. et al., 2024) fed into a Transformer Encoder-based classifier. Our RoBERTa-based system demonstrated strong performance on the development and test sets for both subtasks and was chosen as our primary submission to both the shared subtasks. The paper discusses the proposed architecture, model training details, performance on validation and test-sets for each of our proposed approaches.`,
      `The proliferation of sophisticated large language models (LLMs) has led to a surge in AI-generated text, making its detection a critical area of research (Jawahar et al., 2020). Identifying machine-generated content is crucial for maintaining information integrity, combating misinformation, and ensuring academic honesty. The M-DAIGT (Multi-domain DAIGT) shared task (Lamsiyah et al., 2025) aims to foster research in this domain by providing datasets for two distinct scenarios: news articles (Subtask 1) and academic abstracts (Subtask 2). Participants are tasked with building systems to classify given texts as either human-written or machine-generated.`,
      `In response to this challenge, our team developed and evaluated three different systems: 1. ROBERTa-based Classifier: A fine-tuned ROBERTa-base model, a widely successful approach for text classification tasks. 2. TF-IDF + SVM Classifier: A traditional machine learning pipeline combining Term Frequency-Inverse Document Frequency (TF-IDF) features with a Linear Support Vector Machine (SVM) (Joachims, 1998). This served as a strong baseline, particularly for Subtask 1. 3. Llama-Feature Ensemble with Transformer Classifier (Candace): An experimental system designed to capture nuanced signals from multiple LLMs. It extracts probabilistic features (e.g., token log-probabilities, entropy) from a suite of Llama-3.2 models (Meta AI, 2024) and uses a custom Transformer Encoder-based model for final classification.`,
    ],
  },
  {
    id: 'architectures',
    title: 'System Architectures',
    content: [
      "We developed three distinct systems, each employing a different strategy for AI-generated text detection.",
      "System 1: RoBERTa-based Classifier: This system (Figure 1) fine-tunes a pre-trained RoBERTa-base model. The input text is tokenized, and the ROBERTa model processes these tokens. The final hidden state corresponding to the special 'CLS' token is then passed through a linear classification layer to produce a binary prediction (human or machine).",
      "System 2: TF-IDF + SVM Classifier: Our second system (Figure 2) follows a traditional machine learning pipeline. Textual input is first converted into a numerical representation using TF-IDF vectorization, capturing n-grams. These TF-IDF features are then fed into a Linear Support Vector Machine (SVM) for classification.",
      "System 3: Llama-Feature Ensemble with Transformer Classifier (Candace): The third system (Figure 3), named Candace, is more experimental. It involves a two-stage process. First, probabilistic features (alpha, beta, gamma, as described in Section 4.3) are extracted from each token of the input text using multiple Llama-3.2 models. These feature vectors are concatenated. Second, this sequence of combined Llama-derived features is processed by a custom Transformer Encoder-based classification head, which then makes the final human/machine prediction.",
    ],
    figures: [
      { src: 'images/roberta.jpg', caption: 'Figure 1: Architecture of System 1: ROBERTa-based Classifier.' },
      { src: 'images/svm.png', caption: 'Figure 2: Architecture of System 2: TF-IDF + SVM Classifier.' },
      { src: 'images/candace.png', caption: 'Figure 3: Architecture of System 3: Candace - Llama-Feature Ensemble with Transformer Classifier.' },
    ],
  },
  {
    id: 'results',
    title: 'Experiments & Results',
    content: [
        "All systems were trained and evaluated on the M-DAIGT development sets for their respective subtasks. The primary evaluation metrics were Accuracy and F1-score.",
        "ROBERTa-based System (System 1): For Subtask 1 (News), our fine-tuned RoBERTa model achieved an accuracy of 99.95% and an F1-score of 99.95% on the development set (best at epoch 4). For Subtask 2 (Academic Abstracts), the RoBERTa model achieved 100.00% accuracy and 100.00% F1-score on the development set (stable from epoch 1 onwards). Given its strong and consistent performance, this system was chosen for our official submissions for both subtasks.",
        "TF-IDF + SVM System (System 2): This system was evaluated on Subtask 1 and Subtask 2. On its internal training data (as dev metrics were not explicitly separated in its notebook), it achieved an accuracy of 99.81% and an F1-score of 0.9981. While competitive, it was slightly outperformed by the RoBERTa model on the development set.",
        "Candace System (System 3): For Subtask 1 (News), the Candace system achieved a development accuracy of 99.80% (best at epoch 6). The same architectural design and training procedure were applied to Subtask 2, and similar development accuracy (99.80%) was observed during its separate training run. While promising, this system is more computationally intensive due to the multi-LLM feature extraction step. The ROBERTa system offered slightly better or comparable performance with significantly less overhead for these specific datasets.",
        "Our experiments highlight the continued effectiveness of fine-tuned transformer models like ROBERTa for text classification tasks, achieving near-perfect scores on the development sets for both news and academic abstract domains. The RoBERTa model's ability to capture subtle linguistic cues makes it highly suitable for distinguishing between human and AI-generated text. The TF-IDF + SVM approach, while simpler, provided a very strong baseline for Subtask 1, underscoring the utility of traditional methods, especially when coupled with robust feature engineering like n-grams. The Candace system, which extracts features from multiple Llama-3.2 models, also showed excellent performance. This approach is interesting as it attempts to distill knowledge from several powerful LLMs into a smaller, specialized classifier. However, the feature extraction process is computationally expensive. For the M-DAIGT datasets, the gains over a well-tuned ROBERTa model were not substantial enough to justify the additional complexity and computational cost as the primary submission."
    ],
    table: {
      caption: "Table 1: Test set performance, RoBERTa base model with Fast tokenizer outperforming all models",
      headers: [
        [{ content: 'System', rowSpan: 2}, { content: 'Subtask 1 (News) - Test Set', colSpan: 4 }, { content: 'Subtask 2 (Academic) - Test Set', colSpan: 4 }],
        ['Acc.', 'F1', 'Prec.', 'Rec.', 'Acc.', 'F1', 'Prec.', 'Rec.']
      ],
      rows: [
        ['ROBERTa-base (System 1)', '99.99%', '99.99%', '99.80%', '100.0%', '100.00%', '100.00%', '100.00%', '100.00%'],
        ['TF-IDF + SVM (System 2)', '97.90%', '97.91%', '97.52%', '98.30%', '99.85%', '99.85%', '100.0%', '99.70%'],
        ['Candace (System 3)', '99.75%', '99.75%', '99.60%', '99.90%', '99.95%', '99.95%', '100.00%', '99.90%'],
      ]
    }
  },
  {
    id: 'conclusion',
    title: 'Conclusion & Acknowledgments',
    content: [
      "We presented three distinct systems for detecting AI-generated text in news articles and academic abstracts. Our fine-tuned ROBERTa-base model demonstrated exceptional performance on the development and test sets for both subtasks, achieving near-perfect accuracy and F1-scores, and was selected as our primary submission. The TF-IDF+SVM system served as a strong baseline, and the experimental Candace system, leveraging features from multiple Llama models, also showed high efficacy. Future work could involve ensembling these diverse models, exploring more sophisticated feature fusion techniques for the Candace system, and investigating the robustness of these models against adversarial attacks or text generated by newer, more advanced language models.",
      "We thank the organizers of the M-DAIGT shared task for providing the dataset and the evaluation platform. BEsides that, the research is also supported by the provisional award under the National Research Program for Universities (NRPU), Higher Education Commission (HEC) Pakistan, with the title 'NRPU: Automatic Multi-Model Classification of Religious Hate Content from Social Media' (Reference Research Project No. 16153)."
    ],
  },
  {
    id: 'references',
    title: 'References',
    references: [
      { id: 'lamsiyah2025', html: "Salima Lamsiyah, Saad Ezzini, Abdelkader Elmahdaouy, Hamza Alami, Abdessamad Benlahbib, Samir El Amrany, Salmane Chafik, and Hicham Hammouchi. 2025. Shared task on multi-domain detection of ai-generated text (m-daigt). In <em>Proceedings of the 15th International Conference on Recent Advances in Natural Language Processing (RANLP)</em>." },
      { id: 'jawahar2020', html: "Ganesh Jawahar, Muhammad Abdul-Mageed, and Laks Lakshmanan, V.S. 2020. Automatic detection of machine generated text: A critical survey. In <em>Proceedings of the 28th International Conference on Computational Linguistics</em>, pages 2296–2309, Barcelona, Spain (Online). International Committee on Computational Linguistics." },
      { id: 'joachims1998', html: "Thorsten Joachims. 1998. Text categorization with support vector machines: Learning with many relevant features. In <em>European conference on machine learning</em>, pages 137-142. Springer." },
      { id: 'meta2024', html: "Meta AI. 2024. Llama 3.2 Model Family. <a href='https://ai.meta.com/llama/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>https://ai.meta.com/llama/</a>." },
      { id: 'opitz1999', html: "D. Opitz and R. Maclin. 1999. Popular ensemble methods: An empirical study. Unpublished manuscript." },
      { id: 'w2024', html: "Y. W., J. M., P. Ivanov, J. Su, A. Sh., A. Tsvigun, O. M. Afzal, T. M., T. Sasaki, T. Arnold, A. F. Aji, and N. Habash. 2024. M4: Multi-generator, Multi-domain, and Multi-lingual Black-Box Machine-Generated Text Detection. <em>ArXiv preprint arXiv:2305.14902</em>." },
      { id: 'wolf2020', html: "Thomas Wolf, Lysandre Debut, Victor Sanh, Julien Chaumond, Clement Delangue, Anthony Moi, Pierric Cistac, Tim Rault, Remi Louf, Morgan Funtowicz, Joe Davison, Sam Shleifer, Patrick von Platen, Clara Ma, Yacine Jernite, Julien Plu, Canwen Xu, Teven Le Scao, Sylvain Gugger, Mariama Drame, Quentin Lhoest, and Alexander Rush. 2020. Transformers: State-of-the-art natural language processing. In <em>Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing: System Demonstrations</em>, pages 38–45, Online. Association for Computational Linguistics." }
    ]
  }
];
