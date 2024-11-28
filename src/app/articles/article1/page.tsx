// export default function Article1() {
//     return (
//       <div className="bg-slate-950 text-white min-h-screen py-12">
//         <div className="max-w-screen-xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8 text-center">Static Article 1</h1>
//           <p className="text-gray-300">
//             This is the content of the static article 1. Add your own text here!
//           </p>
//         </div>
//       </div>
//     );
//   }

import React from "react";

export default function Article1()  {
  return (
    <div className="bg-slate-950 text-white p-8 rounded-lg shadow-md  mt-12 w-full mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-6">Деплой проекта Next.js на Ubuntu сервер</h1>
      <article className="space-y-6 max-w-screen-xl mx-auto">
        <Section
          title="Шаг 1: Установка Nginx в Ubuntu"
          description="Nginx — это мощный и высокопроизводительный веб-сервер, который часто используется для обслуживания статических файлов, реверс-прокси, балансировки нагрузки и других задач. Рассмотрим процесс его установки на Ubuntu."
          steps={[
            {
              subtitle: "Шаг 1.1: Обновление системы",
              description: "Перед установкой рекомендуется обновить списки пакетов и обновить систему:",
              commands: ["sudo apt update", "sudo apt upgrade -y"],
            },
            {
              subtitle: "Шаг 1.2: Установка Nginx",
              description: "Для установки Nginx выполните команду:",
              commands: ["sudo apt install nginx -y"],
            },
            {
              subtitle: "Шаг 1.3: Проверка статуса Nginx",
              description: "Убедитесь, что сервер работает:",
              commands: ["sudo systemctl status nginx"],
            },
            {
              subtitle: "Шаг 1.4: Настройка брандмауэра (если требуется)",
              description: "Если на сервере включен ufw (брандмауэр), разрешите HTTP и HTTPS трафик:",
              commands: ["sudo ufw allow 'Nginx Full'"],
            },
            {
              subtitle: "Шаг 1.5: Тестирование установки",
              description: "Откройте браузер и введите IP-адрес вашего сервера. Если установка прошла успешно, вы увидите стандартную приветственную страницу Nginx.",
              commands: [],
            },
          ]}
        />

        <Section
          title="Шаг 2: Установите Node.js и npm"
          steps={[
            {
              description: "Установите Node.js и npm:",
              commands: [
                "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -",
                "sudo apt install -y nodejs",
              ],
            },
          ]}
        />

        <Section
          title="Шаг 3: Настройка Git"
          steps={[
            {
              description: "Установите Git:",
              commands: ["sudo apt install -y git"],
            },
            {
              description: "Клонируйте репозиторий проекта:",
              commands: ["git clone https://github.com/username/project.git /var/www/project"],
            },
            {
              description: "Настройте SSH-ключ для автоматической авторизации с Git:",
              commands: [
                "ssh-keygen -t rsa -b 4096 -C 'your_email@example.com'",
                "cat ~/.ssh/id_rsa.pub",
              ],
            },
          ]}
        />

        <Section
          title="Шаг 4: Настройка проекта"
          steps={[
            {
              description: "Перейдите в директорию проекта и установите зависимости:",
              commands: ["cd /var/www/project", "npm install"],
            },
            {
              description: "Соберите проект Next.js:",
              commands: ["npm run build"],
            },
          ]}
        />

        <Section
          title="Шаг 5: Настройка PM2"
          steps={[
            {
              description: "Запустите проект с помощью PM2:",
              commands: ["pm2 start npm --name 'nextjs-app' -- start"],
            },
            {
              description: "Сохраните конфигурацию PM2, чтобы проект запускался при перезагрузке сервера:",
              commands: ["pm2 save", "pm2 startup"],
            },
          ]}
        />

        <Section
          title="Шаг 6: Настройка конфигурационного файла Nginx"
          steps={[
            {
              description: "Пример конфигурации Nginx:",
              commands: [
                `server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`,
              ],
            },
            {
              description: "Активируйте конфигурацию и перезапустите Nginx:",
              commands: ["sudo ln -s /etc/nginx/sites-available/project /etc/nginx/sites-enabled/", "sudo nginx -t", "sudo systemctl restart nginx"],
            },
          ]}
        />

        <Section
          title="Шаг 7: Установка SSL-сертификата"
          steps={[
            {
              description: "Установите Certbot и сгенерируйте SSL-сертификат:",
              commands: [
                "sudo apt install -y certbot python3-certbot-nginx",
                "sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com",
              ],
            },
            {
              description: "Проверьте автоматическое обновление сертификатов:",
              commands: ["sudo certbot renew --dry-run"],
            },
          ]}
        />

        <Section
          title="Шаг 8: Завершение"
          steps={[
            {
              description: "Для деплоя обновлений выполните следующие команды:",
              commands: [
                "cd /var/www/html/project",
                "git pull",
                "npm run build",
                "pm2 restart nextjs-app",
              ],
            },
          ]}
        />
      </article>
    </div>
  );
};


type SectionProps = {
    title?: string; // Заголовок секции, необязательный
    description?: string; // Описание секции, необязательное
    steps?: {
      subtitle?: string; // Подзаголовок шага, необязательный
      description?: string; // Описание шага, необязательное
      commands?: string[]; // Массив строк для команд, необязательный
    }[]; // Массив шагов, необязательный
  };
  
  const Section: React.FC<SectionProps> = ({ title, description, steps = [] }) => {
    return (
      <div>
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        {description && <p className="mb-4">{description}</p>}
        {steps.map((step, index) => (
          <div key={index} className="mb-4">
            {step.subtitle && <h3 className="text-xl font-medium mb-2">{step.subtitle}</h3>}
            {step.description && <p className="mb-2">{step.description}</p>}
            {step.commands && step.commands.length > 0 && (
              <pre className="bg-slate-800 text-green-500 p-4 rounded-md overflow-x-auto">
                {step.commands.join("\n")}
              </pre>
            )}
          </div>
        ))}
      </div>
    );
  };
  
//   export default Section;
  
