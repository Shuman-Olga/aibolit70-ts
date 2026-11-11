import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">Ошибка 404</p>
      <h1>Страница не найдена</h1>
      <p>Возможно, адрес изменился или страница была удалена.</p>
      <Link className="button button--primary" href="/">На главную</Link>
    </section>
  );
}
