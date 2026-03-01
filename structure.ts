// запрос на сервер для получения основных данных
interface GetDashbord {
    tab: 'educations' | 'tasks' | 'inefficient';
    programs: string[];
    user_id?: string; // что в итоге решили по поводу офиса?
    start?: number;
    end?: number;
}

// запрос на сервер для получения данных в модальное окно
interface GetModalWindow {
    program_id: string;
    metric_code: string;
    object_id?: string; // идентификатор сотрудника или офиса
}



// GetDashbord
// Основной интерфейс
// ответ от сервера для построения дашборда
interface Dashboard {
    breadcrumbs: User[];
    filters: Filter;
    metrics: Metric[];
}

// GetModalWindow
// Ответ от сервера для построения модального окна
interface ModalWindow {
    type: 'event' | 'course' | 'skillcup';
    name: name;
    tasks: Task[];
}

// модальное окно
interface Task {
    name: string;
    duration?: string;
    users?: User[];
}

interface User {
    id: string;
    fullname: string;
    value?: number;
    status?: Status;
}

interface Status {
    code: string;
    name: string;
}


interface Filter {
    title: 'РН' | 'РГО';
    users: User[];
}

interface Office {
    id: string;
    code: string;
    name: string;
    value: number;
    users: User[];
}

interface Metric {
    code: string;
    name: string;
    value: number;
    offices: Office[];
}
