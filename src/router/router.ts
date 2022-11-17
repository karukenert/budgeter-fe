import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

export enum ERoutes {
    BUDGETS = 'BUDGETS',
    BUDGET_DETAILED = 'BUDGET_DETAILED',
    BUDGET_TRANSACTIONS_DETAILED = 'BUDGET_TRANSACTIONS_DETAILED',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/budgets',
        component: () => import('../views/BudgetsView.vue'),
        name: ERoutes.BUDGETS,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: ':budgetKey',
                component: () => import('../views/views-detailed/budget/BudgetDetailed.vue'),
                name: ERoutes.BUDGET_DETAILED,
                props: true
            },
            {
                path: ':budgetKey/transactions',
                component: () => import('../views/views-detailed/budget/BudgetTransactionsDetailed.vue'),
                name: ERoutes.BUDGET_TRANSACTIONS_DETAILED,
                props: true
            },
        ]
    },
    {
        path: '/login',
        component: () => import( '../views/LoginView.vue'),
        name: ERoutes.LOGIN,
        meta: {
            hidden: true,
        }
    },
    {
        path: '/logout',
        component: () => import( '../views/LogoutView.vue'),
        name: ERoutes.LOGOUT,
        meta: {
            hidden: true
        }
    },
]

// TODO: redirect to login if user accesses wrong page by url

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// TODO: beforeeach -> check if we have user info

export default router;
