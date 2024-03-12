# Desafio Smartfit

- Alguns passos importantes, primeiramente foi realizado configuração de fonte e de cores para começar o projeto.

- Começaremos criando um componente header e estilizaremos a header conforme orientação da imagem

- Depois criação do componente formulario e estilização do mesmo

# Lógica de formulario

- primeiramente iremos importar nosso formBuilder como injeção de dependencia no nosso constructor, depois iremos chamar o formGroup como uma variavel e iremos implementar a logica de carregamento inicial dentro de ngOnInit:

        public formGroup!: FormGroup;

        constructor(private formBuilder: FormBuilder) {}

        ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
          hour: '',
          showClosed: false,
        });
      }

  Agora fazemos as atribuições via HTML.

-
