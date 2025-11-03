<div className="mt-4 flex gap-2 flex-wrap">
                {types.map(t => (
                  <button
                    key={t}
                    onClick={() => setFilter(t)}
                    className={text-sm px-3 py-1 rounded-full ${filter === t ? 'bg-white/10' : 'bg-white/5'} }
                  >{t}</button>
                ))}
              </div>
            </div>
            <div className="w-48 h-72 hidden md:block rounded-lg overflow-hidden shadow-2xl">
              <img src={MOVIES[0].poster} alt="hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map(movie => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-white/6 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} KinoMir360 — Ссылка для просмотра ведёт в Telegram-канал.</div>
      </footer>
    </div>
  );
}

function Card({ movie }) {
  const [hover, setHover] = useState(false);

  const gradientStyle = {
    boxShadow: hover ? 0 8px 30px ${movie.color}66, inset 0 0 50px ${movie.color}22 : '0 6px 18px rgba(0,0,0,0.6)'
  };

  return (
    <div
      className="group rounded-lg overflow-hidden relative transform-gpu transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={gradientStyle}
    >
      <div className="relative">
        <img src={movie.poster} alt={movie.title} className={w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{movie.title}</h3>
            <div className="text-xs text-gray-300">{movie.year} · {movie.rating}⭐</div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-md text-sm"
            >Смотреть</a>
          </div>
        </div>
      </div>

      {/* accent bar that uses movie.color and animates on hover */}
      <div
        className="absolute left-0 top-0 h-full w-1 transition-all duration-500"
        style={{ background: linear-gradient(180deg, ${movie.color}, rgba(0,0,0,0)), width: hover ? '12px' : '6px' }}
      ></div>

      {/* small neon glow */}
      <div className="pointer-events-none">
        <div className="absolute inset-0" style={{ boxShadow: hover ? 0 0 60px ${movie.color}55 : 'none', transition: 'box-shadow 300ms ease' }}></div>
      </div>
    </div>
  );
}
