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

# Criação do service e filtros

- Primeiro iremos criar um service dentro da pasta services que irá realizar a requisição na API fornecida pela smartfit para realização dos filtros.

- Criamos também um arquivo environment.ts que irá ter a url armazenada.

- Agora iremos fazer a lógica de requisição no nosso service:
  export class GetUnitsService {
  private url: string = environment.api;

      constructor(private httpClient: HttpClient) {}

      ngOnInit(): void {}

      public getAllUnits(): Observable<UnitsResponse> {
        return this.httpClient.get<UnitsResponse>(`${this.url}`);
      }

  }
  
  -- Lembrando que o UnitsResponse é uma tipagem que criamos atraves do que a URL nos fornece.

- Depois disso para verificar se estamos pegando as informações iremos chamar a requisição dentro do nosso ngOnInit do component form:

  this.getUnitsService.getAllUnits().subscribe((res) => console.log(res));

  - Com isso as informaçoes ja devem ser visualizadas em tela de desenvolvimento.
