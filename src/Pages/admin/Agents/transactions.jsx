import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../components/admin/adminLayout';

function Transactions() {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div>
                <AdminLayout>
                    <div>
                        Transactions
                    </div>
                </AdminLayout>
            </div>

        </>
    )
}

export default Transactions;