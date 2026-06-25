import { ArrowLeft, BookOpen, GraduationCap, Heart, Users, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function CreditosPage() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="min-h-svh bg-gradient-to-br from-secondary via-background to-primary/10 text-foreground py-10 px-4 md:px-8 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 opacity-60 mix-blend-multiply blur-3xl animate-float"></div>
      <div className="pointer-events-none absolute top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-secondary-foreground/5 opacity-60 mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto w-full z-10 flex-1">
        {/* Top bar with back button */}
        <div className="mb-8">
          <Link
            to={isAuthenticated ? '/clases' : '/login'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/85 text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{isAuthenticated ? 'Volver a Clases' : 'Ir al Login'}</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap mb-6 bg-card/50 backdrop-blur-md p-4 rounded-2xl border border-border/50 max-w-2xl mx-auto shadow-sm">
            <img
              alt="Logo PresenTech"
              className="h-14 w-auto object-contain drop-shadow-md"
              src="/logo_presentech_icon.png"
            />
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            <img
              alt="Logo PUCE"
              className="h-14 w-auto object-contain"
              src="/logotipo-puce-80_png/logotipo-puce-80_color_horizontal.png"
            />
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            <img
              alt="Logo Fe y Alegría"
              className="h-12 w-auto object-contain"
              src="/logo_fe_y_alegria.png"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">PresenTech</h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Sistema de gestión de asistencia docente desarrollado con propósito social e innovación educativa.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Card: Desarrollo */}
          <div className="md:col-span-2 rounded-3xl border border-border/50 bg-card/75 backdrop-blur-md p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-foreground">Equipo de Desarrollo</h2>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Este proyecto, denominado <strong>Presentech</strong>, fue desarrollado por los estudiantes de la <strong>Pontificia Universidad Católica del Ecuador (PUCE)</strong>:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { name: 'María Paulina Astudillo Serrano', role: 'Estudiante PUCE' },
                { name: 'Martín Alejandro Herrera Pacheco', role: 'Estudiante PUCE' },
                { name: 'Katherine Johana Maldonado Lincango', role: 'Estudiante PUCE' },
                { name: 'Stephano Alfonso Zapata Condoy', role: 'Estudiante PUCE' }
              ].map((student, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-secondary/40 border border-border/40 hover:border-primary/20 hover:bg-secondary/60 transition-colors">
                  <p className="font-semibold text-foreground text-sm">{student.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{student.role}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border/40 pt-4 mt-2">
              <p className="text-sm text-foreground flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                <span>Bajo la tutoría del <strong>Ing. Francisco Rodríguez</strong>, profesor tutor.</span>
              </p>
            </div>
          </div>

          {/* Card: Academic Context */}
          <div className="rounded-3xl border border-border/50 bg-card/75 backdrop-blur-md p-8 shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold text-foreground">Marco Académico</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                El proyecto se realizó en el marco de la asignatura de <strong>Emprendimiento Tecnológico</strong>.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizando la metodología de <strong>Aprendizaje-Servicio (A+S)</strong> en la <strong>Pontificia Universidad Católica del Ecuador (PUCE)</strong>.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/40 bg-primary/5 rounded-2xl p-4 border border-primary/10">
              <p className="text-xs text-primary font-semibold uppercase tracking-wide">PUCE A+S</p>
              <p className="text-xs text-muted-foreground mt-1">Vinculando la ciencia con el servicio a la comunidad.</p>
            </div>
          </div>
        </div>

        {/* Second Grid: Thanks & Links */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {/* Card: Agradecimientos */}
          <div className="rounded-3xl border border-border/50 bg-card/75 backdrop-blur-md p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Heart className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-foreground">Agradecimientos</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Agradecemos de manera especial a la <strong>Coordinación de Aprendizaje-Servicio de la PUCE</strong> por su acompañamiento; sin su apoyo no habría sido posible esta iniciativa innovadora dentro de la universidad.
              </p>
              <p>
                Extendemos también nuestro agradecimiento a la <strong>Unidad Educativa Fe y Alegría</strong> por las facilidades brindadas para el desarrollo de este proyecto.
              </p>
              <p>
                Agradecemos asimismo al docente <strong>Prof. Daniel Cedillo</strong> y al <strong>Vicerrector Javier Castillo</strong>, quienes colaboraron activamente en la validación y acompañamiento de este proyecto.
              </p>
            </div>
          </div>

          {/* Card: Recursos */}
          <div className="rounded-3xl border border-border/50 bg-card/75 backdrop-blur-md p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold text-foreground">Recursos y Enlaces</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Este proyecto se distribuye como software libre e incluye material de soporte para usuarios y desarrolladores.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="/manual_usuario_presentech.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Manual de Usuario (PDF)</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Abrir PDF</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1t-1KDgvkTR5iqHv_nl06fqmmqgSFTQlE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-sm font-semibold">Video Tutorial (Docentes)</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Ver Video</span>
              </a>

              <a
                href="https://drive.google.com/file/d/1MPlbbSf4l1TuLaNYDIwI0kH7DBQ8S9p0/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-sm font-semibold">Video Tutorial (Admins)</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Ver Video</span>
              </a>

              <a
                href="https://github.com/presentech-feya/Presentech.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-border bg-background hover:bg-primary/5 hover:text-primary transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <i className="fa-brands fa-github text-lg text-primary w-5 text-center"></i>
                  <span className="text-sm font-semibold">Repositorio GitHub</span>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Ver Código</span>
              </a>
            </div>
          </div>
        </div>

        {/* License footer note */}
        <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed border-t border-border/40 pt-6">
          Este proyecto se distribuye como software libre a través de GitHub, e incluye el manual de usuario y el video tutorial correspondientes, disponibles en los enlaces señalados en esta página.
        </p>
      </div>

      <footer className="mt-12 text-center text-xs text-muted-foreground border-t border-border/20 pt-6 max-w-5xl mx-auto w-full">
        &copy; {new Date().getFullYear()} PresenTech &middot; Pontificia Universidad Católica del Ecuador
      </footer>
    </div>
  )
}
