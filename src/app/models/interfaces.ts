export interface Alergeno {
  tipo: string;
  titulo: string;
  icono: string;
  clase: string;
}

export interface AlergenoInfo {
  icono: string;
  nombre: string;
  descripcion: string;
}

export interface Helado {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  badgeTexto: string;
  badgeClase: string;
  alergenos: Alergeno[];
}

export interface CategoriaFiltro {
  id: string;
  nombre: string;
  icono: string;
}

export interface HeladosData {
  categorias: CategoriaFiltro[];
  helados: Helado[];
  alergenosInfo: AlergenoInfo[];
  notaImportante: string;
}

export interface Paleta {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  categorias: string[];
  badgeTexto: string;
  badgeClase: string;
  alergenos: Alergeno[];
  temporada: boolean;
}

export interface PaletasData {
  categorias: CategoriaFiltro[];
  paletas: Paleta[];
  alergenosInfo: AlergenoInfo[];
  notaImportante: string;
}

export interface Bebida {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  tipo: string;
  badgeTexto: string;
  badgeClase: string;
}

export interface PersonalizacionContenido {
  label: string;
  texto: string;
}

export interface Personalizacion {
  icono: string;
  titulo: string;
  contenido: PersonalizacionContenido[];
}

export interface BebidasData {
  bebidas: Bebida[];
  personalizacion: Personalizacion[];
}

export interface Postre {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: string;
  incluye: string;
  destacado: boolean;
  especial: boolean;
}

export interface Chocolate {
  id: number;
  nombre: string;
  imagen: string;
}

export interface Sirope {
  id: number;
  nombre: string;
  imagen: string;
}

export interface Extra {
  id: number;
  nombre: string;
  precio: string;
  descripcion: string;
  nota: string;
  icono: string;
}

export interface Combinacion {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
}

export interface PostresData {
  postres: Postre[];
  chocolates: Chocolate[];
  siropes: Sirope[];
  otros: Sirope[];
  extras: Extra[];
  combinaciones: Combinacion[];
}

export interface Horario {
  dias: string;
  horas: string;
}

export interface Temporada {
  id: string;
  nombre: string;
  meses: string;
  clase: string;
  tipo: string;
  horarios: Horario[];
}

export interface InfoEspecial {
  titulo: string;
  descripcion: string;
}

export interface HorariosData {
  titulo: string;
  subtitulo: string;
  temporadas: Temporada[];
  infoEspecial: InfoEspecial[];
}

export interface FaqPregunta {
  pregunta: string;
  respuesta: string;
}

export interface FaqCategoria {
  titulo: string;
  icono: string;
  preguntas: FaqPregunta[];
}

export interface FaqData {
  titulo: string;
  subtitulo: string;
  categorias: FaqCategoria[];
}

export interface ContactoInfo {
  icono: string;
  label: string;
  valor: string;
  href: string;
  claseIcono: string;
}

export interface HorarioRapido {
  temporada: string;
  hora: string;
}

export interface RedSocial {
  nombre: string;
  icono: string;
  href: string;
  clase: string;
}

export interface OpcionAsunto {
  value: string;
  label: string;
}

export interface ContactoData {
  titulo: string;
  subtitulo: string;
  infoContacto: ContactoInfo[];
  horariosRapidos: HorarioRapido[];
  redesSociales: RedSocial[];
  opcionesAsunto: OpcionAsunto[];
}

export interface HomeHero {
  titulo1: string;
  titulo2: string;
  subtitulo: string;
  botonTexto: string;
  botonLink: string;
  video: string;
}

export interface HomePasion {
  titulo: string;
  texto: string;
}

export interface HomeProducto {
  titulo: string;
  descripcion: string;
  imagen: string;
  botonTexto: string;
  botonLink: string;
}

export interface HomeCaracteristica {
  titulo: string;
  descripcion: string;
}

export interface HomeUbicacion {
  titulo: string;
  direccion: string;
  subtitulo: string;
  botonTexto: string;
  botonLink: string;
  mapaUrl: string;
}

export interface HomeData {
  hero: HomeHero;
  pasion: HomePasion;
  productos: HomeProducto[];
  caracteristicas: HomeCaracteristica[];
  ubicacion: HomeUbicacion;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string | null;
  children: NavChild[];
}

export interface FooterLink {
  label: string;
  href: string;
  externo?: boolean;
}

export interface FooterColumna {
  titulo: string;
  links: FooterLink[];
}

export interface FooterRedSocial {
  nombre: string;
  href: string;
  imagen: string;
}

export interface FooterData {
  columnas: FooterColumna[];
  redesSociales: FooterRedSocial[];
  copyright: string;
  autor: string;
}

export interface NavegacionData {
  header: NavItem[];
  footer: FooterData;
}
