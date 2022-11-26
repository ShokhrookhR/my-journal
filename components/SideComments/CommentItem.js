import { Avatar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CommentItem = () => {
  return (
    <div>
      <div className="max-h-[200px] flex flex-col gap-3 overflow-hidden text-clip">
        <div className="flex gap-3">
          <Link href={''}>
            <Avatar className="rounded" />
          </Link>
          <Typography variant="h6">Bruno Fernandes</Typography>
        </div>
        <div className="flex flex-col gap-2">
          <p className="h-[100px] overflow-hidden">
            Lorem ipsum dolor sitctetur adipim veniam modi aut iure laborum magni eligendi, impedit
            esse quasi voluptatibus tempora libero recusandae minus tenetur sapiente. Aspernatur
            magni dolorum repellendus modi consequatur non ducimus provident laborum. Tempore quam
            consequuntur recusandae necessitatibus voluptatum vel impedit voluptatibus adipisci
            repudiandae doloribus, dolore ducimus, molestias vitae, temporibus alias? Ipsam mollitia
            qui inventore doloremque voluptates error sint veritatis animi unde autem.
          </p>
          <Link href={''}>
            <p className="truncate font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, iste?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sed possimus vel sint quia. Dolores non
              voluptatibus, quis quaerat quos inventore consectetur, explicabo quibusdam, reiciendis
              nesciunt quae aut pariatur eos culpa.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
